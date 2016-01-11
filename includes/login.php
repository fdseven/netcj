<div id="morph_login" class="morph-button morph-button-overlay morph-button-fixed <?php echo $nav_menu; ?>">
          
<button id="login"><i class="icon icon-power"></i><span>Sign In / Sign Up</span></button>

  <div class="morph-content">

    <a href="index.php" class="navbar-brand"><img src="images/logo.png"></a>
    <span class="morphsearch-close icon-close"></span>
        
    <div class="dis_table">
      <div class="dis_table_cell">
      
        <div class="container">
          
          <form action="?login=1" method="post" class="mod_form modal_transition">
            <div class="form-group">
              <label for="log_email">What's Your Email?</label>
              <input type="text" id="log_email" class="form-control" placeholder="Email">
            </div>
            <div class="form-group">
              <label for="log_pass">Enter Your Password <a href="#">(Forgot?)</a></label>
              <input type="password" id="log_pass" class="form-control" placeholder="Password">
            </div>
            <div class="text-center">
              <input type="submit" value="LOGIN" class="btn btn-default">
              <br>
              or<br>
              <a href="#"><strong>Signup</strong></a> for an account
            </div>
          </form>

        </div>
      
      </div>
    </div>
  
  </div>
    
</div>