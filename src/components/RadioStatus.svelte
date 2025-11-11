<script>
  import { RadioStatusManager } from '$lib/radio-status.js';
  import { onMount } from 'svelte';

  const radioManager = new RadioStatusManager();

  onMount(() => {
    console.log('🎵 RadioStatus component mounted - loading status...');
    radioManager.loadStatus();
  });

  async function handleRetry() {
    console.log('🔄 Retrying API connection...');
    await radioManager.loadStatus();
  }

  // Log quando o status mudar
  $: if (radioManager.status) {
    console.log('✅ API Response:', radioManager.status);
  }

  $: if (radioManager.error) {
    console.error('❌ API Error:', radioManager.error);
  }
</script>

<div class="radio-status bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
  {#if radioManager.loading}
    <div class="text-center">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
      <p class="mt-2 text-gray-600">Conectando com a rádio...</p>
    </div>
  {:else if radioManager.error}
    <div class="text-center text-red-600">
      <div class="text-2xl">❌</div>
      <p class="font-semibold">Erro de conexão</p>
      <p class="text-sm mt-1">{radioManager.error}</p>
      <button 
        on:click={handleRetry}
        class="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Tentar novamente
      </button>
    </div>
  {:else if radioManager.status}
    <div class="text-center">
      <div class="text-2xl {radioManager.status.status === 'online' ? 'text-green-500' : 'text-yellow-500'}">
        {radioManager.status.status === 'online' ? '🔴' : '⚫'} ON AIR
      </div>
      
      <div class="mt-4">
        <h3 class="font-bold text-lg">{radioManager.status.current_song.title}</h3>
        <p class="text-gray-600">{radioManager.status.current_song.artist}</p>
      </div>

      <div class="mt-4 flex justify-between text-sm text-gray-500">
        <span>👥 {radioManager.status.listeners} ouvintes</span>
        <span>⏱️ {radioManager.formatDuration(radioManager.status.current_song.duration)}</span>
      </div>

      <button 
        on:click={handleRetry}
        class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
      >
        Atualizar
      </button>
    </div>
  {/if}
</div>
