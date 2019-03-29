import { BalanceInfoServerModel } from './balance-Info-server.model';

export interface Exp1ServerModel {
  balance: BalanceInfoServerModel;
  tariffPlan: TariffPlanInfoServerModel;
  numbers: NumbersServerModel[];
  storage: StorageServerModel;
  callDetail: CallDetailServerModel[];
}