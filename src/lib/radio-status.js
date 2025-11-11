import { radioAPI } from './api.js';

/**
 * Gerenciador de estado da rádio
 */
export class RadioStatusManager {
  constructor() {
    this.status = null;
    this.loading = false;
    this.error = null;
  }

  /**
   * Carrega o status da rádio
   */
  async loadStatus() {
    this.loading = true;
    this.error = null;

    try {
      this.status = await radioAPI.getStatus();
    } catch (err) {
      if (err instanceof Error) {
        this.error = err.message;
      } else {
        this.error = String(err);
      }
    } finally {
      this.loading = false;
    }
  }

  /**
   * Formata a duração da música
   * @param {number} seconds
   * @returns {string}
   */
  formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes}min`;
  }
}
