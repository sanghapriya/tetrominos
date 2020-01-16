import GenerateCell from './generateCell';

const GenerateCells = () => {

  const dots = new Array(100);

  return dots.map(dot => GenerateCell())
};


export default GenerateCells;