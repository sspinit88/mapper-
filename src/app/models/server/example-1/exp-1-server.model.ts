import { BalanceInfoServerModel } from './balance-Info-server.model';
import { TariffPlanInfoServerModel } from './tariff-plan-info-server.model';
import { NumbersServerModel } from './numbers-server.model';
import { StorageServerModel } from './storage-server.model';
import { CallDetailServerModel } from './call-detail-server.model';

export interface Exp1ServerModel {
  balance: BalanceInfoServerModel;
  tariffPlan: TariffPlanInfoServerModel;
  numbers: NumbersServerModel[];
  storage: StorageServerModel;
  callDetail: CallDetailServerModel[];
}