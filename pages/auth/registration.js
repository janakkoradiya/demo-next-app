import { useRouter } from "next/router";

const Registration = () => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Welcome to the Registration Page</h1>
            <button onClick={() => router.push('./contact')}>Contact</button>
            <button onClick={() => router.push('./about')}>About</button>
        </div>
    );
};

export default Registration;