
import classes from './Main.module.scss';
import Slider from '../Slider';

const Main = (): JSX.Element => {
    return (
        
        <main className={classes.main}>
            <Slider />
        </main>
     
    );
  }
    
    export default Main;