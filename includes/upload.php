<div id="morph_upload" class="morph-button morph-button-overlay morph-button-fixed">
          
<button id="upload"><i class="icon icon-upload"></i><span class="hidden-xs">Upload</span></button>

  <div class="morph-content">
  
    <span class="morphsearch-close icon-close"></span>
        
    <div class="dis_table">
      <div class="dis_table_cell">
      
        <div class="container text-center">
          
          <div class="box box_hl fileinput">
            <div class="box_content">
                <input id="fileupload" type="file">
                <div class="dis_table">
                  <div class="dis_table_cell">
                    <i class="icon icon-upload2"></i>
                    <h4>Select file to upload</h4>
                    <div class="drag">or drag & drop video file</div>
                  </div>
                </div>
            </div>
            <span class="center-block">please choose an video format only</span>
          </div>

          <div id="upload_preview" class="row">

            <div id="processing"></div>

            <div class="content col-xs-12 col-sm-offset-3 col-sm-6">           

            <!-- The global progress bar -->
            <div id="progress" class="progress">
                <div class="progress-bar"></div>
            </div>

              <form>

                <div id="form_upload">

                  <div class="form-group">
                    <input type="text" class="form-control" id="title" placeholder="Title">
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" id="desc" rows="3" placeholder="Description"></textarea>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" id="location" placeholder="Location">
                  </div>
                  <div class="form-group">
                    <select class="form-control">
                      <option selected>- Category -</option>
                      <option>Fashion</option>
                      <option>Politic</option>
                      <option>Culture</option>
                      <option>Technology</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" id="tags" placeholder="Tags | Separate with space or use quotation mark">
                  </div>
                  <div class="form-group text-left">
                    <label class="checkbox-inline">
                      <input type="checkbox" id="fb" value="Facebook"> <i class="icon icon-fb fb"></i>
                    </label>
                    <label class="checkbox-inline">
                      <input type="checkbox" id="tw" value="Twitter"> <i class="icon icon-tw tw"></i>
                    </label>
                    <label class="checkbox-inline">
                      <input type="checkbox" id="gp" value="Google +"> <i class="icon icon-gp gp"></i>
                    </label>
                    <p>This video will be automatically share after completion published</p>
                  </div>

                  <div class="form-group">

                  <input type="reset" value="CANCEL" class="btn btn-danger">
                  <input type="button" value="NEXT" id="next_upload" class="btn btn-success">

                  </div>

                </div>

                <div id="img_preview" class="hide">
                
                  <!-- The container for the uploaded files -->
                  <div id="files" class="files"></div>

                  <h4 class="text-left">Select Thumbnail</h4>

                  <div class="row thumb">

                    <div class="col-xs-6 col-sm-4">
                      <span class="box box_169">
                        <span class="box_content lqd">
                          <a href="#">
                            <label><input type="radio" name="satu">
                              <span class="dis_table summary">
                                <span class="dis_table_cell">Set as thumbnail</span>
                              </span>
                              <img src="images/img5.jpg">
                            </label>
                          </a>
                        </span>
                      </span>
                    </div>

                    <div class="col-xs-6 col-sm-4">
                      <span class="box box_169">
                        <span class="box_content lqd">
                          <a href="#">
                            <label><input type="radio" name="satu">
                              <span class="dis_table summary">
                                <span class="dis_table_cell">Set as thumbnail</span>
                              </span>
                              <img src="images/img5.jpg">
                            </label>
                          </a>
                        </span>
                      </span>
                    </div>

                    <div class="col-xs-6 col-sm-4">
                      <span class="box box_169">
                        <span class="box_content lqd">
                          <a href="#">
                            <label><input type="radio" name="satu">
                              <span class="dis_table summary">
                                <span class="dis_table_cell">Set as thumbnail</span>
                              </span>
                              <img src="images/img5.jpg">
                            </label>
                          </a>
                        </span>
                      </span>
                    </div>

                    <div class="col-xs-6 col-sm-4">
                      <span class="box box_169">
                        <span class="box_content lqd">
                          <a href="#">
                            <label><input type="radio" name="satu">
                              <span class="dis_table summary">
                                <span class="dis_table_cell">Set as thumbnail</span>
                              </span>
                              <img src="images/img5.jpg">
                            </label>
                          </a>
                        </span>
                      </span>
                    </div>

                    <div class="col-xs-6 col-sm-4">
                      <span class="box box_169">
                        <span class="box_content lqd">
                          <a href="#">
                            <label><input type="radio" name="satu">
                              <span class="dis_table summary">
                                <span class="dis_table_cell">Set as thumbnail</span>
                              </span>
                              <img src="images/img5.jpg">
                            </label>
                          </a>
                        </span>
                      </span>
                    </div>

                    <div class="col-xs-6 col-sm-4">
                      <span class="box box_169">
                        <span class="box_content lqd">
                          <a href="#">
                            <label><input type="radio" name="satu">
                              <span class="dis_table summary">
                                <span class="dis_table_cell">Set as thumbnail</span>
                              </span>
                              <img src="images/img5.jpg">
                            </label>
                          </a>
                        </span>
                      </span>
                    </div>

                  </div>

                  <input type="button" value="SAVE" id="save_upload" class="btn btn-success">

                </div>

              </form>

            </div>

          </div>

          <div id="upload_success" class="hide">
            <i class="icon icon-check"></i>
            <h3>FILE UPLOADED SUCCESSFULLY!</h3>
          </div>

          <span class="note">Important: by sharing, you confirm that your videos comply with our <a href="#">Terms of Use</a> and don't infringe anyone else's rights. If in doubt, check our Copyright Information page and FAQ's.</span>
            
        </div>
      
      </div>
    </div>
  
  </div>
    
</div>