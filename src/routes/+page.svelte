<script>
  import RadioStatus from '../components/RadioStatus.svelte';
</script>

<svelte:head>
  <title>Radio Casa 13</title>
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-purple-400 to-blue-500 py-8">
  <div class="container mx-auto px-4">
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold text-white mb-2">🎵 Radio Casa 13</h1>
      <p class="text-white/80">Sua rádio online 24/7</p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <!-- Status da Rádio -->
      <div>
        <h2 class="text-2xl font-semibold text-white mb-4">Status da Rádio</h2>
        <RadioStatus />
      </div>

      <!-- Player/Controles -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Controles</h2>
        <div class="space-y-4">
          <button class="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold">
            ▶️ Reproduzir Stream
          </button>
          <button class="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold">
            ⏭️ Pular Música
          </button>
          <div class="text-center text-gray-600">
            <p>Volume:</p>
            <input type="range" min="0" max="100" class="w-full mt-2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
