<script>
    import { auth } from './../../firebase.js';
    import { navigate } from 'svelte-routing';
    import { user } from './../../store.js';

    // Destructuring to obtain email and password from form via Event
    const handleLoginForm = ({ 
        target: { elements: { email, password } } 
    }) => {
        auth.signInWithEmailAndPassword(email.value, password.value).catch(error => alert(error.message));
        let firebaseUser = auth.currentUser;

        if(firebaseUser) {
            let {email} = firebaseUser;
            console.log('first', $user);
            user.set({...$user, loggedIn: true, email});
            console.log('then', $user);
            navigate('/dashboard');
        }
    };
</script>

<h1>Login to the app</h1>
<div>
    <form on:submit|preventDefault={handleLoginForm}>
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email">
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password">
        </div>
        <div>
            <input type="submit" value="Login">
        </div>
    </form>
</div>
