import { SHARED, error } from 'base-variation';
try{
  SHARED.applyTreatment(VARIATION, PAGE);
}catch(e){
  error(e);
}
