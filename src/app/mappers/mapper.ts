export interface Mapper<TModel, TServerModel> {
  form(obj: TServerModel): TModel;
  fromArray?(arr: TServerModel[]): TModel[];
  to(obj: TModel): TServerModel;
  toArray?(arr: TModel[]): TServerModel[];
}