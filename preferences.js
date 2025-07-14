
// SDK de Mercado Pago
import { MercadoPagoConfig } from 'mercadopago';
import dotenv from "dotenv"
dotenv.config()
// Agrega credenciales
export const cliente = new MercadoPagoConfig({ accessToken: process.env.ACCESS_TOKEN });
