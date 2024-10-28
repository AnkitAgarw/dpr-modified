<script lang="ts">
  const amenities = [
    { name: "Infinity Pool", icon: "🏊‍♂️" },
    { name: "State-of-the-art Gym", icon: "💪" },
    { name: "Yoga & Meditation Center", icon: "🧘‍♀️" },
    { name: "Indoor Games Room", icon: "🎮" },
    { name: "Children's Play Area", icon: "🎪" },
    { name: "Landscaped Gardens", icon: "🌳" },
    { name: "Walking Track", icon: "🏃‍♂️" },
    { name: "Multi-purpose Hall", icon: "🏛️" },
    { name: "Cinema Theater", icon: "🎬" },
    { name: "Library & Reading Room", icon: "📚" },
    { name: "24/7 Security", icon: "🔒" },
    { name: "Power Backup", icon: "⚡" },
    { name: "EV Charging Stations", icon: "🔌" },
    { name: "Guest Parking", icon: "🅿️" },
    { name: "Tennis Court", icon: "🎾" },
    { name: "Basketball Court", icon: "🏀" },
    { name: "Spa & Sauna", icon: "💆‍♀️" },
    { name: "Party Lawn", icon: "🎉" },
    { name: "Senior Citizen Area", icon: "👴" },
    { name: "Pet Park", icon: "🐕" },
    { name: "Rainwater Harvesting", icon: "💧" },
    { name: "Solar Power System", icon: "☀️" },
    { name: "Business Center", icon: "💼" },
    { name: "Convenience Store", icon: "🏪" },
    { name: "Clubhouse", icon: "🏰" }
  ];
</script>

<section class="py-20 bg-white dark:bg-gray-900">
  <div class="container mx-auto px-4">
    <h2 class="section-title">Premium Amenities</h2>
    <p class="section-subtitle">Experience luxury living with our world-class amenities</p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {#each amenities as amenity}
        <div class="card p-6 hover:shadow-xl transition-shadow duration-300">
          <div class="flex flex-col items-center text-center space-y-4">
            <div class="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <span class="text-2xl">{amenity.icon}</span>
            </div>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">
              {amenity.name}
            </h3>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>