import { BalanceModel } from './balance.model';
import { TariffPlanInfoModel } from './tariff-plan-info.model';
import { NumbersModel } from './number.model';
import { StorageModel } from './storage.model';
import { CallDetailModel } from './call-detail.model';

export interface Exp1Model {
  balance: BalanceModel;
  tariffPlan: TariffPlanInfoModel;
  numbers: NumbersModel[];
  storage: StorageModel;
  callDetail: CallDetailModel[];
}