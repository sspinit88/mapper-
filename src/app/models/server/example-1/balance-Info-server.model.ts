import { CurrencyServerModel } from './currency-server.model';

export interface BalanceInfoServerModel {
  currency: CurrencyServerModel;
  ett: number;
  value: number;
}