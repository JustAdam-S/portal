const login = () => {
    return(
   <>
   <div class="signup-form-wrapper modal">
          <div class="x-btn signup-x">
            &times;
          </div>
          <div class="form-header">
            <h1>Welcome</h1>
            <h3>Login</h3>
          </div>
          <form class="form">
            <div class="input-group">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" /> {/* I am at the point of no return */}
            </div>
            <div class="input-group">
              <i class="fas fa-key"></i>
              <input type="password" placeholder="Password" />
            </div>
            <button type="button">Login</button>
          </form>
        </div>
   </>
   )
}
export default login;