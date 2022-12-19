import CryptoJS from "crypto-js";

type SYSTEM = "WEBSITE" | "ASSESSMENTS" | "APPLICATION";
type KEY = `process.env.NEXT_PUBLIC_${SYSTEM}_KEY`;
type IV = `process.env.NEXT_PUBLIC_${SYSTEM}_IV`;

export default class Crypto {
  private key;
  private iv;

  constructor(key: KEY, iv: IV) {
    this.key = key;
    this.iv = iv;
  }

  encrypt(val: any): any {
    try {
      if (typeof val === "object") {
        if (Array.isArray(val)) {
          return val.map((item) => this.encrypt(item));
        } else {
          return Object.entries(val).reduce(
            (acc: Record<string, any>, [field, value]: [string, any]) => {
              acc[field] = this.encrypt(value);
              return acc;
            },
            {}
          );
        }
      }

      return CryptoJS.AES.encrypt(val, this.key, {
        iv: CryptoJS.enc.Hex.parse(this.iv),
      }).toString();
    } catch (e) {
      console.log(e);
    }
  }

  decrypt(val: any): any {
    try {
      if (typeof val === "object") {
        if (Array.isArray(val)) {
          return val.map((item) => this.decrypt(item));
        } else {
          return Object.entries(val).reduce(
            (acc: Record<string, any>, [key, value]: [string, any]) => {
              acc[key] = this.decrypt(value);
              return acc;
            },
            {}
          );
        }
      } else {
        return CryptoJS.AES.decrypt(val, this.key, {
          iv: CryptoJS.enc.Hex.parse(this.iv),
        }).toString();
      }
    } catch (e) {
      console.log(e);
    }
  }
}
