import {tetrominos} from '../utility/generateTetromino'

export default function Tetromino (props)  {
    

  
      return(tetrominos(props.x,props.y,props.tetrominoType));
         
}