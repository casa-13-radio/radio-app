/**
 * @typedef {Object} NowPlaying
 * @property {string} title
 * @property {string} artist
 * @property {number} duration
 */

/**
 * @typedef {Object} RadioStatus
 * @property {string} status
 * @property {number} listeners
 * @property {NowPlaying} current_song
 */

const API_BASE = import.meta.env.VITE_API_URL || 'http://167.126.24.4:3000';

/**
 * API client para integração com o backend da rádio
 */
export const radioAPI = {
  /**
   * Obtém o status atual da rádio
   * @returns {Promise<RadioStatus>}
   */
  async getStatus() {
    const response = await fetch(`${API_BASE}/api/radio/status`);
    if (!response.ok) throw new Error('Failed to fetch radio status');
    return response.json();
  },

  /**
   * Verifica a saúde do backend
   * @returns {Promise<Object>}
   */
  async getHealth() {
    const response = await fetch(`${API_BASE}/api/radio/health`);
    return response.json();
  },

  /**
   * Testa a conexão básica com o backend
   * @returns {Promise<Object>}
   */
  async testConnection() {
    const response = await fetch(`${API_BASE}/`);
    return response.json();
  }
};
