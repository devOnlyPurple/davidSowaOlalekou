// constants/AppConstants.js
class AppConstants {
  // ⚠️ UNIQUEMENT les constantes PUBLIQUES (visibles côté client)
  static CANAL_MOBIL = "MOBIL";
  static DEFAULT_AVATAR = "default_male_avatar.png";
  static DEFAULT_AVATAR_ADMIN = "default_sad_avatar.png";
  static DEFAULT_WOMAN_ADMIN = "default_female_avatar.png";
  static SEXE_ARRAY = ["1", "2"];
  static COUNTRY_AUTHORIZED_SMS = ["228", "225", "229", "244"];
  static CHANNEL_SEND_CODE = ["sms", "email", "whatsapp"];
  static TYPE_REQUEST = ["registration", "forget"];

  // Client ID Google (public, pas secret)
  static clientId =
    "1093491753842-dhfv3d35kn38fg5i7a5iues9s0cgfql0.apps.googleusercontent.com";

  // Propriétés dynamiques pour React
  static get ENV() {
    return import.meta.env.MODE; // 'development' ou 'production'
  }

  static get IS_DEV() {
    return import.meta.env.DEV;
  }

  static get BASE_URL() {
    return this.IS_DEV
      ? "http://localhost:3000"
      : import.meta.env.VITE_PUBLIC_URL ||
          "https://portfolio-qaz5.onrender.com";
  }

  // URL de l'API (avec proxy en dev)
  static get API_BASE_URL() {
    return this.IS_DEV ? "/api/v1" : `${this.BASE_URL}/api/v1`;
  }
}

export default AppConstants;
