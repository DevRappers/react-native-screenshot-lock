import { useEffect } from 'react';
import { register, unregister } from './lockScreenShot';

const useLockScreenShot = () => {
    useEffect(() => {
        register();
        return () => unregister();
    }, []);
};

export default useLockScreenShot;
