// Enhanced Google Places Autocomplete for TreeShop
// Integrates with Google Maps API for address validation and distance calculation

class TreeShopPlacesAutocomplete {
  constructor(inputElement, options = {}) {
    this.input = inputElement;
    this.options = {
      componentRestrictions: { country: 'us' },
      fields: ['formatted_address', 'geometry', 'address_components'],
      types: ['address'],
      ...options
    };
    
    this.autocomplete = null;
    this.selectedPlace = null;
    this.onPlaceSelected = options.onPlaceSelected || (() => {});
    
    this.init();
  }
  
  init() {
    if (!window.google || !window.google.maps) {
      console.error('Google Maps API not loaded');
      return;
    }
    
    this.autocomplete = new google.maps.places.Autocomplete(this.input, this.options);
    this.autocomplete.addListener('place_changed', () => this.handlePlaceSelect());
  }
  
  handlePlaceSelect() {
    const place = this.autocomplete.getPlace();
    
    if (!place.geometry) {
      console.error('No geometry data for selected place');
      return;
    }
    
    this.selectedPlace = {
      address: place.formatted_address,
      latitude: place.geometry.location.lat(),
      longitude: place.geometry.location.lng(),
      components: this.parseAddressComponents(place.address_components)
    };
    
    // Calculate distance from TreeShop base (New Smyrna Beach, FL)
    this.calculateDistanceFromBase();
    
    this.onPlaceSelected(this.selectedPlace);
  }
  
  parseAddressComponents(components) {
    const result = {};
    
    components.forEach(component => {
      const types = component.types;
      
      if (types.includes('street_number')) {
        result.streetNumber = component.long_name;
      }
      if (types.includes('route')) {
        result.streetName = component.long_name;
      }
      if (types.includes('locality')) {
        result.city = component.long_name;
      }
      if (types.includes('administrative_area_level_2')) {
        result.county = component.long_name;
      }
      if (types.includes('administrative_area_level_1')) {
        result.state = component.short_name;
      }
      if (types.includes('postal_code')) {
        result.zipCode = component.long_name;
      }
    });
    
    return result;
  }
  
  calculateDistanceFromBase() {
    if (!this.selectedPlace) return;
    
    const baseLocation = new google.maps.LatLng(29.0216, -81.0770); // New Smyrna Beach
    const projectLocation = new google.maps.LatLng(
      this.selectedPlace.latitude, 
      this.selectedPlace.longitude
    );
    
    // Calculate straight-line distance
    const distance = google.maps.geometry.spherical.computeDistanceBetween(
      baseLocation, 
      projectLocation
    );
    
    const distanceInMiles = distance * 0.000621371;
    
    // Use Distance Matrix API for driving time/distance
    const distanceService = new google.maps.DistanceMatrixService();
    distanceService.getDistanceMatrix({
      origins: [baseLocation],
      destinations: [projectLocation],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.IMPERIAL,
      avoidHighways: false,
      avoidTolls: false
    }, (response, status) => {
      if (status === google.maps.DistanceMatrixStatus.OK) {
        const result = response.rows[0].elements[0];
        
        if (result.status === 'OK') {
          this.selectedPlace.drivingDistance = result.distance.text;
          this.selectedPlace.drivingTime = result.duration.text;
          this.selectedPlace.drivingTimeMinutes = Math.ceil(result.duration.value / 60);
          
          // Calculate TreeShop transportation cost
          const roundTripMinutes = this.selectedPlace.drivingTimeMinutes * 2;
          const transportHours = Math.ceil(roundTripMinutes / 60);
          this.selectedPlace.transportCost = transportHours * 350; // $350/hour
          
          console.log('Transport calculation:', {
            oneWayTime: this.selectedPlace.drivingTimeMinutes,
            roundTripMinutes,
            transportHours,
            cost: this.selectedPlace.transportCost
          });
          
          // Trigger update with transport data
          this.onPlaceSelected(this.selectedPlace);
        }
      }
    });
    
    this.selectedPlace.straightLineDistance = distanceInMiles;
  }
  
  getSelectedPlace() {
    return this.selectedPlace;
  }
  
  clearSelection() {
    this.selectedPlace = null;
    this.input.value = '';
  }
}

// Export for global use
window.TreeShopPlacesAutocomplete = TreeShopPlacesAutocomplete;