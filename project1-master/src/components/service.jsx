import React from "react";
import "./style/services.css"
import Navbar from "./Navbar";
function service() {
  return (
    <div>
      <Navbar/>
      <div class="container" id="c">
        <div class="row mt-2" id="r1">
          <div class="col text-center bg-light-50" id="d1">
            <p class="text-light fs-5 fw-semibold" style={{ margin: '5%' }}>OUR service1
            </p>
            <p class="text-light fs-5 fw-semibold" style={{ margin: '5%' }}>OUR service2
            </p>
            <p class="text-light fs-5 fw-semibold" style={{ margin: '5%' }}>OUR service3
            </p>
            <button type="submit" class="btn btn-outline-dark btn-primary">Contact us</button>
          </div>
          <div class="col text-center" id="d2">
            <p class="text-light  f-3 fw-lighter" style={{ margin: '25%' }}>OUR SERVICE</p>
          </div>
        </div>
        <div class="row bg-light mt-5">
          <div class="row text-center" >

            <p class="fw-light fs-4">Payroll soultions Simplified</p>
            <p >payroll submission should be both accurate and on time guven that employees rely on their payback to service Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sequi perspiciatis officia. Veritatis suscipit dolorem delectus laudantium, minus ea itaque expedita corrupti? Provident reprehenderit, suscipit libero dicta praesentium ratione temporibus.</p>
          </div>
          <div class="row mt-5 mb-5">
            <h4 className=" text-center fw-light">Our lastest Projects</h4>
            <div class="col text-center">
              <span class="text-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                  class="bi bi-lock svg-footer" viewBox="0 0 16 16">
                  <path
                    d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                </svg>
              </span>
              <p class="text-success fs-5 fw-semibold">Ease of use</p>
              <p class="text-success "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus minus repudiandae atque quasi possimus suscipit quia, vitae eos deseru</p>
            </div>
            <div class="col text-center ">
              <span class="text-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                  class="bi bi-lock svg-footer" viewBox="0 0 16 16">
                  <path
                    d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                </svg>
              </span>
              <p class="text-success fs-5 fw-semibold">Ease of use</p>
              <p class="text-success "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus minus repudiandae atque quasi possimus suscipit quia, vitae eos deseru</p>
            </div>
            <div class="col text-center">
              <span class="text-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                  class="bi bi-lock svg-footer" viewBox="0 0 16 16">
                  <path
                    d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                </svg>
              </span>
              <p class="text-success fs-5 fw-semibold">Ease of use</p>
              <p class="text-success "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus minus repudiandae atque quasi possimus suscipit quia, vitae eos deseru</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default service;