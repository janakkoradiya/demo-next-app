import styles from '../styles/About.module.css';
import ProtectedRoute from './protectedRoute';

const About = () => {
    return (
        <ProtectedRoute>
            <div className={styles.container}>
                <h1 className={styles.heading}>About Us</h1>
            </div>
        </ProtectedRoute>
    );
};

export default About;