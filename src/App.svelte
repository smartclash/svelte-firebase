<script>
    import Register from './Components/Auth/Register.svelte';
    import Dashboard from './Components/Dashboard.svelte';
    import { Router, Link, Route } from 'svelte-routing';
    import Login from './Components/Auth/Login.svelte';
    import { user } from './store.js';
</script>

<Router>

    <ul>
        <li><Link to="/">Home</Link></li>
        {#if $user.loggedIn}
            <li><Link to="dashboard">Dashboard</Link></li>
            <li><a href="#">Logout</a></li>
        {:else}
            <li><Link to="login">Login</Link></li>
            <li><Link to="register">Register</Link></li>
        {/if}
    </ul>

    <Route path="login" component={Login} />
    <Route path="register" component={Register} />
    <Route path="dashboard" component={Dashboard} />
    <Route path="/">
        <h1>HOME</h1>
        <p>To view the dashboard, register or login to your account</p>
    </Route>

</Router>
