const login = () => {
    return(
   <>
   <div class="signup-form-wrapper modal">
          <div class="x-btn signup-x">
            &times;
          </div>
          <div class="form-header">
            <h1>Get access to the portal</h1>
            <h3>Register</h3>
          </div>
          <form class="form">
            <div class="input-group">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-group">
              <i class="far fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div class="input-group">
              <i class="fas fa-key"></i>
              <input type="password" placeholder="Password" />
            </div>
            <button type="button">Register</button>
          </form>
        </div>
   </>
   )
}
export default login;