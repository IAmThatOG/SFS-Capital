(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans&display=swap\");\n/* general */\n* {\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  padding: 0;\n  margin: 0;\n  font-family: \"Fira Sans\", sans-serif;\n}\ninput[type=\"text\"],\ninput[type=\"password\"],\ninput[type=\"file\"],\ninput[type=\"date\"],\ninput[type=\"email\"],\nselect,\ntextarea {\n  width: 100%;\n  background: rgba(207, 216, 234, 0.3) !important;\n  border: 1px solid #cfd8ea !important;\n  border-radius: 2px !important;\n  padding: 18px !important;\n  margin-top: 8px;\n}\n.input_div {\n  overflow: auto;\n  width: 100%;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.input_div .formLabel {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: rgba(4, 25, 66, 0.3);\n}\ninput:focus,\nselect:focus,\ntextarea {\n  outline: none !important;\n}\n.input_div .below_input {\n  width: 100%;\n  padding: 10px 0;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.input_div .below_input .left p {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 14px;\n  color: #828282;\n}\n.input_div .below_input .left p span {\n  color: #002058;\n}\n.input_div .below_input .right p {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 14px;\n  color: #828282;\n}\n.input_div .below_input .right p span {\n  color: #f9a825;\n}\n.btn_full {\n  width: 100%;\n  padding: 15px 0;\n}\n.btn_full button {\n  width: 100%;\n  padding: 15px 0;\n\n  background-color: #ffd873;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  color: #041942;\n  font-weight: bold;\n  border: none;\n}\n.half_input_div {\n  display: flex;\n\n  justify-content: space-between;\n}\n.half_input_div .col_6 {\n  width: 48%;\n}\n/* End of general */\n/* first section */\ndiv.first {\n  width: 100%;\n  overflow: auto;\n  /* height: 900px; */\n  padding: 100px 250px 230px 250px;\n  background-image: url('headerImg.png');\n  background-position: top right;\n  /* background-size: 983px 970px; */\n  background-repeat: no-repeat;\n}\ndiv.inner {\n  display: flex;\n  flex-direction: row;\n}\ndiv.inner div.left,\ndiv.inner div.right {\n  width: 50%;\n}\n/* div.inner div div.left {\n\n}\n\ndiv.inner div div.right {\n\n} */\ndiv.inner div.left .logo {\n  width: 100%;\n  overflow: auto;\n}\ndiv.inner div.left .header_title {\n  width: 100%;\n  padding-top: 85px;\n}\ndiv.inner div.left .header_title span {\n  font-weight: 500;\n  font-size: 45px;\n  color: #002058;\n}\ndiv.inner div.left .header_text {\n  width: 100%;\n  padding: 30px 0;\n}\ndiv.inner div.left .header_text p {\n  font-weight: 500;\n  font-size: 16px;\n  color: rgba(0, 32, 88, 0.6);\n\n  width: 386px;\n}\ndiv.inner div.left .header_btn {\n  width: 100%;\n\n  display: flex;\n  flex-direction: row;\n}\ndiv.inner div.left .header_btn a.start {\n  background-color: #ffd873;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  font-weight: bold;\n  font-size: 16px;\n  padding: 8px 25px;\n  margin-right: 20px;\n  color: #041942;\n  text-decoration: none;\n}\ndiv.inner div.left .header_btn a.learn {\n  padding: 8px 25px;\n  color: #041942;\n  font-weight: bold;\n  font-size: 12px;\n  border: 0.7px solid #002058;\n  border-radius: 4px;\n  text-decoration: none;\n}\ndiv.inner div.right {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\ndiv.inner div.right div:first-child {\n  margin-right: 20px;\n}\ndiv.inner div.right button.login {\n  padding: 9px 26px;\n  border: none;\n  background-color: transparent;\n  color: white;\n}\ndiv.inner div.right button.signup {\n  padding: 9px 26px;\n  border: none;\n  background-color: #ffd873;\n  color: #041942;\n  border-radius: 2px;\n}\n/* End of first section */\n/* Second section */\ndiv.second {\n  width: 100%;\n  padding: 100px 0 0 0;\n}\n.second_title {\n  width: 100%;\n  text-align: center;\n  padding-bottom: 70px;\n}\n.second_title h4 {\n  font-weight: 500;\n  font-size: 40px;\n  line-height: 48px;\n  color: rgba(0, 32, 88, 0.8);\n}\n.second_container {\n  width: 80%;\n  margin: 0 auto;\n  overflow: auto;\n}\n.second_container .services {\n  width: 100%;\n\n  display: flex;\n  flex-direction: row;\n}\n.second_container .services .each_service {\n  width: 33.33%;\n  text-align: center;\n}\n.second_container .services .each_service .service_icon {\n  width: 100%;\n  padding-bottom: 30px;\n}\n.second_container .services .each_service .service_icon div {\n  width: 21%;\n  margin: 0 auto;\n  padding: 10px 17px;\n  background-color: #fff;\n  border-radius: 6px;\n  box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.06);\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.each_service .service_title {\n  width: 100%;\n  text-align: center;\n}\n.each_service .service_title h4 {\n  font-weight: bold;\n  font-size: 25px;\n  line-height: 30px;\n  color: rgba(0, 32, 88, 0.7);\n}\n.each_service .service_text {\n  width: 100%;\n  text-align: center;\n  padding: 5px 100px;\n}\n.each_service .service_text p {\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 26px;\n  color: #b3b3b3;\n}\n/* End of second section */\n/* Third section */\ndiv.third {\n  width: 100%;\n  overflow: auto;\n  /* height: 2900px; */\n  padding: 410px 100px 270px 100px;\n  background-image: url('new.png');\n  background-position: top left;\n  /* background-size: 983px 970px; */\n  background-repeat: no-repeat;\n}\ndiv.third .third_up {\n  width: 100%;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.third_up .up_left {\n}\n.third_up .up_right {\n  width: 35%;\n}\n.third_up .up_right h4 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 40px;\n  color: #ffffff;\n}\n.third_up .up_right p {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 28px;\n  color: #ffffff;\n  padding-top: 25px;\n}\n/* End of third section */\n/* Fourth Section */\ndiv.fourth {\n  width: 100%;\n\n  background-image: url('quote.png');\n  background-position: 100px 30px;\n  /* background-size: 983px 970px; */\n  background-repeat: no-repeat;\n}\ndiv.fourth div.second_container h4 {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 40px;\n  line-height: 48px;\n  color: #273444;\n}\ndiv.fourth .comments {\n  padding: 100px 0;\n  width: 100%;\n  overflow: scroll;\n}\ndiv.fourth .comments::-webkit-scrollbar {\n  display: none;\n}\n.comments .each_comments_div .each_comments {\n  padding: 30px;\n  box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.03);\n  width: 400px;\n  margin-right: 30px;\n  float: left;\n  overflow: auto;\n  cursor: pointer;\n\n  transition: box-shadow 0.4s;\n}\n.comments .each_comments_div .each_comments:hover {\n  box-shadow: 0 3px 1px 1px rgba(0, 0, 0, 0.06);\n}\n.comments .each_comments_div .each_comments .name_role {\n  padding-bottom: 25px;\n}\n.comments .each_comments_div .each_comments .name_role p {\n  margin: 0 !important;\n  padding: 0 !important;\n\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  color: #002058;\n}\n.comments .each_comments_div .each_comments .name_role span {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 22px;\n  color: #002058;\n}\n.footer {\n  width: 100%;\n  background-color: #152144;\n  padding: 70px 0;\n}\n.footer .futa_header {\n  width: 100%;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.footer .futa_header .text_1 {\n  margin-right: 20px;\n}\n.footer .futa_header .text_1 h5 {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 54px;\n  display: flex;\n  color: #ffffff;\n}\n.footer .futa_header .text_2 p {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  color: rgb(255, 255, 255, 0.5);\n}\n.footer .footer_icon_widget {\n  width: 100%;\n  padding-top: 100px;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.footer .footer_icon_widget div {\n  padding: 5px 15px;\n  width: 25%;\n}\n.footer .footer_icon_widget div .download_inst {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  color: #ffffff;\n  padding-top: 17px;\n}\n.footer .footer_icon_widget div .download_inst i {\n  margin-right: 8px;\n}\n.footer .footer_icon_widget .icon_img {\n  width: 66px;\n  height: 66px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.1);\n  clear: both;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.footer .footer_icon_widget .icon_img img {\n}\n.footer .footer_icon_widget .download_inst {\n  width: 100%;\n  text-align: center;\n}\n.footer .footer_icon_widget .ft_2 {\n  border-left: 1px solid rgba(255, 255, 255, 0.3);\n  border-right: 1px solid rgba(255, 255, 255, 0.3);\n}\n.footer .footer_icon_widget .ft_4 {\n  background-color: #f9a825;\n  border-radius: 20px;\n  padding: 35px;\n  color: #fff;\n}\n.footer .last_futa_section {\n  width: 100%;\n  padding-top: 80px;\n\n  display: flex;\n  flex-direction: row;\n}\n.footer .last_futa_section div {\n  padding: 10px 25px 10px 0;\n}\n.footer .last_futa_section div a {\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 19px;\n  color: rgba(255, 255, 255, 0.558);\n  transition: 0.4s;\n}\n.footer .last_futa_section div a:hover {\n  color: #fff;\n}\n/* End of fourth Section */\n/* Login Page */\n.login_left_section {\n  width: 40%;\n  height: 100vh;\n  padding: 60px;\n  background: linear-gradient(rgb(0, 32, 88, 0.8), rgb(0, 32, 88, 0.8)),\n    url('people.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  float: left;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: fixed;\n}\n.company_logo {\n  width: 100%;\n  overflow: auto;\n  float: left;\n\n  color: white;\n}\n.login_left_section .company_logo h3 {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 47px;\n  color: #ffffff;\n  margin-bottom: 0;\n}\n.login_left_section .company_logo span {\n  letter-spacing: 2px;\n}\n.welcome_note {\n  width: 100%;\n  float: left;\n  align-self: center;\n  color: white;\n}\n.welcome_note h1 {\n  padding-bottom: 16px;\n}\n.welcome_note p:first-child {\n  font-size: 25px;\n  line-height: 21px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.welcome_note p:nth-child(2) {\n  font-size: 20px;\n  line-height: 21px;\n  color: rgba(255, 255, 255, 0.7);\n  word-spacing: 2px !important;\n}\n.patners_login_page {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n\n  color: white;\n  font-size: 30px;\n\n  padding: 30px;\n  width: 100%;\n}\n.login_right_section {\n  width: calc(100% - 40%);\n  float: left;\n  margin-left: 40%;\n}\n.login_mini_nav_two {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n\n  padding: 60px;\n}\n.login_mini_nav_two p {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 16px;\n  color: #002058;\n}\n.login_mini_nav_two p i {\n  margin-right: 15px;\n}\n.login_mini_nav {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n\n  padding: 60px;\n}\n.login_mini_nav p {\n  margin-top: 10px;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 19px;\n  color: rgba(0, 32, 88, 0.5);\n}\n.btn_getStarted {\n  border: none;\n  padding: 11px 27px;\n  box-shadow: 0px 5px 20px rgba(24, 37, 56, 0.1);\n  background-color: #ffffff;\n  border-radius: 4px;\n  cursor: pointer;\n\n  transition: box-shadow 0.3s, transform 0.2s;\n\n  font-weight: 600;\n  font-size: 14px;\n  color: #002058;\n}\n.btn_getStarted:hover {\n  box-shadow: 0px 5px 5px rgba(24, 37, 56, 0.1);\n}\n.btn_getStarted:active {\n  outline: none !important;\n  transform: translateY(4px);\n}\n.login_mini_nav div {\n  margin-left: 1.5%;\n  margin-right: 1.5%;\n}\n.login_form_div {\n  width: 50%;\n  /* margin: 40px 10%; */\n  background: #ffffff;\n  /* box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15); */\n  /* border-radius: 5px; */\n  /* padding: 60px; */\n  overflow: auto;\n}\n.center_form {\n  width: 100%;\n  overflow: auto;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.form_title {\n  width: 100%;\n}\n/* .form_title h1 {\n    font-weight: 800;\n    font-size: 36px;\n    line-height: 49px;\n} */\n.form_title p {\n  font-weight: 500;\n  font-size: 16px;\n  color: rgba(0, 32, 88, 0.4);\n}\n.btn_below_link {\n  width: 100%;\n  overflow: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-bottom: 15px;\n  padding-top: 30px;\n}\n.leta_space {\n  letter-spacing: 5px;\n}\n.btn_below_link a {\n  color: #002058;\n  text-decoration: none;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 19px;\n  transition: 0.3s;\n}\n.btn_below_link a:hover {\n  text-decoration: none;\n  letter-spacing: 1px;\n}\n.btn_below_link div.forButton a {\n  padding: 11px 75px;\n  background-color: #ffd873;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n}\n/* my custom buttons */\nbutton:hover{\n  cursor: pointer;\n}\ndiv.forButton>button.btn1 {\n  padding: 11px 75px;\n  background-color: #ffd873;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n}\n/* ------------------------ */\n.create_acc_text {\n  font-weight: bold;\n  font-size: 38px;\n  line-height: 130%;\n  color: #002058;\n}\n.prev_color a {\n  color: #f9a825;\n}\n/* End of login Page */\n/* ACCT Success page */\n.center_form_success {\n  width: 100%;\n  overflow: auto;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n\n  height: calc(100vh - 152px);\n\n  /* background-color: pink; */\n}\n.acc_success_div {\n  width: 70%;\n  overflow: auto;\n  height: 80%;\n}\n.acc_success_div .check_img {\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n}\n.center_form_success .success_texts {\n  width: 100%;\n  text-align: center;\n  padding: 40px 0 40px 0;\n}\n.center_form_success .success_texts h4 {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 34px;\n  line-height: 41px;\n  color: #002058;\n}\n.center_form_success .success_texts p {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 145.8%;\n  color: rgb(21, 21, 21, 0.5);\n  padding-top: 20px;\n}\n.btn_continue {\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n}\n.btn_continue button {\n  border: none;\n  background-color: #ffd873;\n  color: #041942;\n  padding: 12px 100px;\n  font-weight: bold;\n\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n\n  transition: 0.4s;\n}\n.btn_continue button:active {\n  transform: translateY(4px);\n  outline: none !important;\n}\n.notification_green {\n  width: 100%;\n  padding: 28px 19px;\n  background-color: #6fcf97;\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);\n  border-radius: 2px;\n\n  margin-bottom: 40px;\n}\n.notification_green p {\n  padding: 0;\n  margin: 0;\n  font-size: 14px;\n  line-height: 18px;\n  color: #ffffff;\n}\n.notification_green p i {\n  margin-right: 10px;\n  font-size: 18px;\n}\n/* End of ACCT Success page */\n/* responsiveness */\n@media only screen and (max-width: 1300px) {\n  div.first {\n    padding: 100px 130px 230px 130px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDZFQUE2RTtBQUQ3RSxZQUFZO0FBR1o7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsU0FBUztFQUNULG9DQUFvQztBQUN0QztBQUVBOzs7Ozs7O0VBT0UsV0FBVztFQUNYLCtDQUErQztFQUMvQyxvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDJCQUEyQjtBQUM3QjtBQUVBOzs7RUFHRSx3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlOztFQUVmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTs7RUFFZix5QkFBeUI7RUFDekIsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsYUFBYTs7RUFFYiw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBLG1CQUFtQjtBQUVuQixrQkFBa0I7QUFDbEI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtFQUNu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c0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFdBQVc7O0VBRVgsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlCQUFpQjs7RUFFakIsMENBQTBDO0VBQzFDLGtCQUFrQjs7RUFFbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qiw0Q0FBNEM7RUFDNUMsa0JBQWtCOztFQUVsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUVBLDZCQUE2QjtBQUU3QixtQkFBbUI7QUFDbkI7RUFDRTtJQUNFLGdDQUFnQztFQUNsQztBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnZW5lcmFsICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GaXJhK1NhbnMmZGlzcGxheT1zd2FwXCIpO1xuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSxcbmh0bWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcbmlucHV0W3R5cGU9XCJmaWxlXCJdLFxuaW5wdXRbdHlwZT1cImRhdGVcIl0sXG5pbnB1dFt0eXBlPVwiZW1haWxcIl0sXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIwNywgMjE2LCAyMzQsIDAuMykgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmZDhlYSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAycHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMThweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5pbnB1dF9kaXYge1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pbnB1dF9kaXYgLmZvcm1MYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGNvbG9yOiByZ2JhKDQsIDI1LCA2NiwgMC4zKTtcbn1cblxuaW5wdXQ6Zm9jdXMsXG5zZWxlY3Q6Zm9jdXMsXG50ZXh0YXJlYSB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlucHV0X2RpdiAuYmVsb3dfaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAwO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmlucHV0X2RpdiAuYmVsb3dfaW5wdXQgLmxlZnQgcCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5pbnB1dF9kaXYgLmJlbG93X2lucHV0IC5sZWZ0IHAgc3BhbiB7XG4gIGNvbG9yOiAjMDAyMDU4O1xufVxuXG4uaW5wdXRfZGl2IC5iZWxvd19pbnB1dCAucmlnaHQgcCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5pbnB1dF9kaXYgLmJlbG93X2lucHV0IC5yaWdodCBwIHNwYW4ge1xuICBjb2xvcjogI2Y5YTgyNTtcbn1cblxuLmJ0bl9mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cblxuLmJ0bl9mdWxsIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4IDA7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDg3MztcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiAjMDQxOTQyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uaGFsZl9pbnB1dF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhhbGZfaW5wdXRfZGl2IC5jb2xfNiB7XG4gIHdpZHRoOiA0OCU7XG59XG5cbi8qIEVuZCBvZiBnZW5lcmFsICovXG5cbi8qIGZpcnN0IHNlY3Rpb24gKi9cbmRpdi5maXJzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgLyogaGVpZ2h0OiA5MDBweDsgKi9cbiAgcGFkZGluZzogMTAwcHggMjUwcHggMjMwcHggMjUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVySW1nLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xuICAvKiBiYWNrZ3JvdW5kLXNpemU6IDk4M3B4IDk3MHB4OyAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5kaXYuaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG5kaXYuaW5uZXIgZGl2LmxlZnQsXG5kaXYuaW5uZXIgZGl2LnJpZ2h0IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLyogZGl2LmlubmVyIGRpdiBkaXYubGVmdCB7XG5cbn1cblxuZGl2LmlubmVyIGRpdiBkaXYucmlnaHQge1xuXG59ICovXG5cbmRpdi5pbm5lciBkaXYubGVmdCAubG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuZGl2LmlubmVyIGRpdi5sZWZ0IC5oZWFkZXJfdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDg1cHg7XG59XG5cbmRpdi5pbm5lciBkaXYubGVmdCAuaGVhZGVyX3RpdGxlIHNwYW4ge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGNvbG9yOiAjMDAyMDU4O1xufVxuXG5kaXYuaW5uZXIgZGl2LmxlZnQgLmhlYWRlcl90ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHggMDtcbn1cblxuZGl2LmlubmVyIGRpdi5sZWZ0IC5oZWFkZXJfdGV4dCBwIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogcmdiYSgwLCAzMiwgODgsIDAuNik7XG5cbiAgd2lkdGg6IDM4NnB4O1xufVxuXG5kaXYuaW5uZXIgZGl2LmxlZnQgLmhlYWRlcl9idG4ge1xuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG5kaXYuaW5uZXIgZGl2LmxlZnQgLmhlYWRlcl9idG4gYS5zdGFydCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4NzM7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiA4cHggMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzA0MTk0MjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5kaXYuaW5uZXIgZGl2LmxlZnQgLmhlYWRlcl9idG4gYS5sZWFybiB7XG4gIHBhZGRpbmc6IDhweCAyNXB4O1xuICBjb2xvcjogIzA0MTk0MjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAwLjdweCBzb2xpZCAjMDAyMDU4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuZGl2LmlubmVyIGRpdi5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbmRpdi5pbm5lciBkaXYucmlnaHQgZGl2OmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5kaXYuaW5uZXIgZGl2LnJpZ2h0IGJ1dHRvbi5sb2dpbiB7XG4gIHBhZGRpbmc6IDlweCAyNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmRpdi5pbm5lciBkaXYucmlnaHQgYnV0dG9uLnNpZ251cCB7XG4gIHBhZGRpbmc6IDlweCAyNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4NzM7XG4gIGNvbG9yOiAjMDQxOTQyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4vKiBFbmQgb2YgZmlyc3Qgc2VjdGlvbiAqL1xuXG4vKiBTZWNvbmQgc2VjdGlvbiAqL1xuXG5kaXYuc2Vjb25kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwMHB4IDAgMCAwO1xufVxuXG4uc2Vjb25kX3RpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XG59XG5cbi5zZWNvbmRfdGl0bGUgaDQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBjb2xvcjogcmdiYSgwLCAzMiwgODgsIDAuOCk7XG59XG5cbi5zZWNvbmRfY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uc2Vjb25kX2NvbnRhaW5lciAuc2VydmljZXMge1xuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uc2Vjb25kX2NvbnRhaW5lciAuc2VydmljZXMgLmVhY2hfc2VydmljZSB7XG4gIHdpZHRoOiAzMy4zMyU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlY29uZF9jb250YWluZXIgLnNlcnZpY2VzIC5lYWNoX3NlcnZpY2UgLnNlcnZpY2VfaWNvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLnNlY29uZF9jb250YWluZXIgLnNlcnZpY2VzIC5lYWNoX3NlcnZpY2UgLnNlcnZpY2VfaWNvbiBkaXYge1xuICB3aWR0aDogMjElO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTBweCAxN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVhY2hfc2VydmljZSAuc2VydmljZV90aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lYWNoX3NlcnZpY2UgLnNlcnZpY2VfdGl0bGUgaDQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6IHJnYmEoMCwgMzIsIDg4LCAwLjcpO1xufVxuXG4uZWFjaF9zZXJ2aWNlIC5zZXJ2aWNlX3RleHQge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTAwcHg7XG59XG5cbi5lYWNoX3NlcnZpY2UgLnNlcnZpY2VfdGV4dCBwIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgY29sb3I6ICNiM2IzYjM7XG59XG5cbi8qIEVuZCBvZiBzZWNvbmQgc2VjdGlvbiAqL1xuXG4vKiBUaGlyZCBzZWN0aW9uICovXG5cbmRpdi50aGlyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgLyogaGVpZ2h0OiAyOTAwcHg7ICovXG4gIHBhZGRpbmc6IDQxMHB4IDEwMHB4IDI3MHB4IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL25ldy5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xuICAvKiBiYWNrZ3JvdW5kLXNpemU6IDk4M3B4IDk3MHB4OyAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5kaXYudGhpcmQgLnRoaXJkX3VwIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRoaXJkX3VwIC51cF9sZWZ0IHtcbn1cblxuLnRoaXJkX3VwIC51cF9yaWdodCB7XG4gIHdpZHRoOiAzNSU7XG59XG5cbi50aGlyZF91cCAudXBfcmlnaHQgaDQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGhpcmRfdXAgLnVwX3JpZ2h0IHAge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nLXRvcDogMjVweDtcbn1cblxuLyogRW5kIG9mIHRoaXJkIHNlY3Rpb24gKi9cblxuLyogRm91cnRoIFNlY3Rpb24gKi9cblxuZGl2LmZvdXJ0aCB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pY29ucy9xdW90ZS5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMHB4IDMwcHg7XG4gIC8qIGJhY2tncm91bmQtc2l6ZTogOTgzcHggOTcwcHg7ICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbmRpdi5mb3VydGggZGl2LnNlY29uZF9jb250YWluZXIgaDQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGNvbG9yOiAjMjczNDQ0O1xufVxuXG5kaXYuZm91cnRoIC5jb21tZW50cyB7XG4gIHBhZGRpbmc6IDEwMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG5kaXYuZm91cnRoIC5jb21tZW50czo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY29tbWVudHMgLmVhY2hfY29tbWVudHNfZGl2IC5lYWNoX2NvbW1lbnRzIHtcbiAgcGFkZGluZzogMzBweDtcbiAgYm94LXNoYWRvdzogMCAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjRzO1xufVxuXG4uY29tbWVudHMgLmVhY2hfY29tbWVudHNfZGl2IC5lYWNoX2NvbW1lbnRzOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuXG4uY29tbWVudHMgLmVhY2hfY29tbWVudHNfZGl2IC5lYWNoX2NvbW1lbnRzIC5uYW1lX3JvbGUge1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cblxuLmNvbW1lbnRzIC5lYWNoX2NvbW1lbnRzX2RpdiAuZWFjaF9jb21tZW50cyAubmFtZV9yb2xlIHAge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICMwMDIwNTg7XG59XG5cbi5jb21tZW50cyAuZWFjaF9jb21tZW50c19kaXYgLmVhY2hfY29tbWVudHMgLm5hbWVfcm9sZSBzcGFuIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzAwMjA1ODtcbn1cblxuLmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMTQ0O1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG5cbi5mb290ZXIgLmZ1dGFfaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb290ZXIgLmZ1dGFfaGVhZGVyIC50ZXh0XzEge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5mb290ZXIgLmZ1dGFfaGVhZGVyIC50ZXh0XzEgaDUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogNTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5mb290ZXIgLmZ1dGFfaGVhZGVyIC50ZXh0XzIgcCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi5mb290ZXIgLmZvb3Rlcl9pY29uX3dpZGdldCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb290ZXIgLmZvb3Rlcl9pY29uX3dpZGdldCBkaXYge1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLmZvb3RlciAuZm9vdGVyX2ljb25fd2lkZ2V0IGRpdiAuZG93bmxvYWRfaW5zdCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nLXRvcDogMTdweDtcbn1cblxuLmZvb3RlciAuZm9vdGVyX2ljb25fd2lkZ2V0IGRpdiAuZG93bmxvYWRfaW5zdCBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5mb290ZXIgLmZvb3Rlcl9pY29uX3dpZGdldCAuaWNvbl9pbWcge1xuICB3aWR0aDogNjZweDtcbiAgaGVpZ2h0OiA2NnB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgY2xlYXI6IGJvdGg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb290ZXIgLmZvb3Rlcl9pY29uX3dpZGdldCAuaWNvbl9pbWcgaW1nIHtcbn1cblxuLmZvb3RlciAuZm9vdGVyX2ljb25fd2lkZ2V0IC5kb3dubG9hZF9pbnN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvb3RlciAuZm9vdGVyX2ljb25fd2lkZ2V0IC5mdF8yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cblxuLmZvb3RlciAuZm9vdGVyX2ljb25fd2lkZ2V0IC5mdF80IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YTgyNTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMzVweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5mb290ZXIgLmxhc3RfZnV0YV9zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5mb290ZXIgLmxhc3RfZnV0YV9zZWN0aW9uIGRpdiB7XG4gIHBhZGRpbmc6IDEwcHggMjVweCAxMHB4IDA7XG59XG5cbi5mb290ZXIgLmxhc3RfZnV0YV9zZWN0aW9uIGRpdiBhIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NTgpO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uZm9vdGVyIC5sYXN0X2Z1dGFfc2VjdGlvbiBkaXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKiBFbmQgb2YgZm91cnRoIFNlY3Rpb24gKi9cblxuLyogTG9naW4gUGFnZSAqL1xuXG4ubG9naW5fbGVmdF9zZWN0aW9uIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogNjBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYigwLCAzMiwgODgsIDAuOCksIHJnYigwLCAzMiwgODgsIDAuOCkpLFxuICAgIHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvcGVvcGxlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZmxvYXQ6IGxlZnQ7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5jb21wYW55X2xvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuXG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ2luX2xlZnRfc2VjdGlvbiAuY29tcGFueV9sb2dvIGgzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ3cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubG9naW5fbGVmdF9zZWN0aW9uIC5jb21wYW55X2xvZ28gc3BhbiB7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbi53ZWxjb21lX25vdGUge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ud2VsY29tZV9ub3RlIGgxIHtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbi53ZWxjb21lX25vdGUgcDpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG5cbi53ZWxjb21lX25vdGUgcDpudGgtY2hpbGQoMikge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICB3b3JkLXNwYWNpbmc6IDJweCAhaW1wb3J0YW50O1xufVxuXG4ucGF0bmVyc19sb2dpbl9wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuXG4gIHBhZGRpbmc6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9naW5fcmlnaHRfc2VjdGlvbiB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MCUpO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcbn1cblxuLmxvZ2luX21pbmlfbmF2X3R3byB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgcGFkZGluZzogNjBweDtcbn1cblxuLmxvZ2luX21pbmlfbmF2X3R3byBwIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgY29sb3I6ICMwMDIwNTg7XG59XG5cbi5sb2dpbl9taW5pX25hdl90d28gcCBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ubG9naW5fbWluaV9uYXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICBwYWRkaW5nOiA2MHB4O1xufVxuXG4ubG9naW5fbWluaV9uYXYgcCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDMyLCA4OCwgMC41KTtcbn1cblxuLmJ0bl9nZXRTdGFydGVkIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMXB4IDI3cHg7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMjBweCByZ2JhKDI0LCAzNywgNTYsIDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcywgdHJhbnNmb3JtIDAuMnM7XG5cbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwMjA1ODtcbn1cblxuLmJ0bl9nZXRTdGFydGVkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggcmdiYSgyNCwgMzcsIDU2LCAwLjEpO1xufVxuXG4uYnRuX2dldFN0YXJ0ZWQ6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cblxuLmxvZ2luX21pbmlfbmF2IGRpdiB7XG4gIG1hcmdpbi1sZWZ0OiAxLjUlO1xuICBtYXJnaW4tcmlnaHQ6IDEuNSU7XG59XG5cbi5sb2dpbl9mb3JtX2RpdiB7XG4gIHdpZHRoOiA1MCU7XG4gIC8qIG1hcmdpbjogNDBweCAxMCU7ICovXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC8qIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7ICovXG4gIC8qIGJvcmRlci1yYWRpdXM6IDVweDsgKi9cbiAgLyogcGFkZGluZzogNjBweDsgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5jZW50ZXJfZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm1fdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogLmZvcm1fdGl0bGUgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0OXB4O1xufSAqL1xuXG4uZm9ybV90aXRsZSBwIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogcmdiYSgwLCAzMiwgODgsIDAuNCk7XG59XG5cbi5idG5fYmVsb3dfbGluayB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbi5sZXRhX3NwYWNlIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cblxuLmJ0bl9iZWxvd19saW5rIGEge1xuICBjb2xvcjogIzAwMjA1ODtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uYnRuX2JlbG93X2xpbmsgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmJ0bl9iZWxvd19saW5rIGRpdi5mb3JCdXR0b24gYSB7XG4gIHBhZGRpbmc6IDExcHggNzVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDg3MztcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi8qIG15IGN1c3RvbSBidXR0b25zICovXG5idXR0b246aG92ZXJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmRpdi5mb3JCdXR0b24+YnV0dG9uLmJ0bjEge1xuICBwYWRkaW5nOiAxMXB4IDc1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4NzM7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLmNyZWF0ZV9hY2NfdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICBjb2xvcjogIzAwMjA1ODtcbn1cblxuLnByZXZfY29sb3IgYSB7XG4gIGNvbG9yOiAjZjlhODI1O1xufVxuXG4vKiBFbmQgb2YgbG9naW4gUGFnZSAqL1xuXG4vKiBBQ0NUIFN1Y2Nlc3MgcGFnZSAqL1xuXG4uY2VudGVyX2Zvcm1fc3VjY2VzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTJweCk7XG5cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cbn1cblxuLmFjY19zdWNjZXNzX2RpdiB7XG4gIHdpZHRoOiA3MCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDgwJTtcbn1cblxuLmFjY19zdWNjZXNzX2RpdiAuY2hlY2tfaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jZW50ZXJfZm9ybV9zdWNjZXNzIC5zdWNjZXNzX3RleHRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweCAwIDQwcHggMDtcbn1cblxuLmNlbnRlcl9mb3JtX3N1Y2Nlc3MgLnN1Y2Nlc3NfdGV4dHMgaDQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDQxcHg7XG4gIGNvbG9yOiAjMDAyMDU4O1xufVxuXG4uY2VudGVyX2Zvcm1fc3VjY2VzcyAuc3VjY2Vzc190ZXh0cyBwIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNDUuOCU7XG4gIGNvbG9yOiByZ2IoMjEsIDIxLCAyMSwgMC41KTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5idG5fY29udGludWUge1xuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ0bl9jb250aW51ZSBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4NzM7XG4gIGNvbG9yOiAjMDQxOTQyO1xuICBwYWRkaW5nOiAxMnB4IDEwMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcblxuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uYnRuX2NvbnRpbnVlIGJ1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubm90aWZpY2F0aW9uX2dyZWVuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDI4cHggMTlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmY2Y5NztcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4ubm90aWZpY2F0aW9uX2dyZWVuIHAge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubm90aWZpY2F0aW9uX2dyZWVuIHAgaSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4vKiBFbmQgb2YgQUNDVCBTdWNjZXNzIHBhZ2UgKi9cblxuLyogcmVzcG9uc2l2ZW5lc3MgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIGRpdi5maXJzdCB7XG4gICAgcGFkZGluZzogMTAwcHggMTMwcHggMjMwcHggMTMwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    /**
     *@memberof AppComponent
     */
    function AppComponent() {
        this.title = 'sfs-angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _create_account_create_account_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-account/create-account.module */ "./src/app/create-account/create-account.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _services_service_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/service.module */ "./src/app/services/service.module.ts");
/* harmony import */ var _confirm_otp_confirm_otp_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./confirm-otp/confirm-otp.module */ "./src/app/confirm-otp/confirm-otp.module.ts");











// import { CompareValidatorDirective } from './shared/compare-validator.directive';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"],
                _create_account_create_account_module__WEBPACK_IMPORTED_MODULE_7__["CreateAccountModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_8__["LoginModule"],
                _services_service_module__WEBPACK_IMPORTED_MODULE_9__["ServiceModule"],
                _confirm_otp_confirm_otp_module__WEBPACK_IMPORTED_MODULE_10__["ConfirmOtpModule"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/confirm-otp/confirm-otp.component.css":
/*!*******************************************************!*\
  !*** ./src/app/confirm-otp/confirm-otp.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm0tb3RwL2NvbmZpcm0tb3RwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/confirm-otp/confirm-otp.component.html":
/*!********************************************************!*\
  !*** ./src/app/confirm-otp/confirm-otp.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\n  <div class=\"login_page_main_div\">\n\n    <!-- Login page Left Section -->\n\n    <div class=\"login_left_section\">\n\n      <!-- Company Logo -->\n\n      <div class=\"company_logo\">\n\n        <h3>\n          SFS\n        </h3>\n        <span>\n          Capital\n        </span>\n\n      </div>\n\n      <!--  -->\n\n      <!-- Welcome Note -->\n\n      <div class=\"welcome_note\">\n\n        <p>\n          Welcome to:\n        </p>\n\n        <h1>\n          SFS Financial <br> service Group\n        </h1>\n\n        <p>\n          product of a Management Buy-out of <br> Skye Financial Services Limited.\n        </p>\n\n      </div>\n\n      <!--  -->\n\n      <!-- Partners -->\n\n      <div class=\"patners_login_page\">\n\n        <!-- <div>\n              <!-- <i class=\"fab fa-accusoft\"></i>\n              <img src=\"../utils/icons/access.png\" alt=\"\">\n          </div>\n          <div>\n              <!-- <i class=\"fab fa-airbnb\"></i>\n              <img src=\"../utils/icons/bet.png\" alt=\"\">\n          </div>\n          <div>\n              <!-- <i class=\"fab fa-amazon-pay\"></i>\n              <img src=\"../utils/icons/branch.png\" alt=\"\">\n          </div>\n          <div>\n              <!-- <i class=\"fab fa-cpanel\"></i>\n              <img src=\"../utils/icons/fidel.png\" alt=\"\">\n          </div> -->\n\n      </div>\n\n      <!--  -->\n\n    </div>\n\n    <!--  -->\n\n    <!-- Login page right Section -->\n\n    <div class=\"login_right_section\">\n\n      <!-- Nav Section -->\n\n      <div class=\"login_mini_nav_two\">\n        <div>\n          <p>\n            <i class=\"fas fa-arrow-left\"></i>\n            Back to Home\n          </p>\n        </div>\n\n      </div>\n\n      <!--  -->\n\n      <!-- Form Section -->\n\n      <div class=\"center_form pt-4\">\n\n        <div class=\"login_form_div pt-5\">\n\n          <!-- Login Form Title -->\n\n          <div class=\"form_title\">\n            <h1 class=\"create_acc_text\">\n              Comfirm email address\n            </h1>\n            <p>\n              We’ve sent a 6 digits code to your email tied this <br> account. Enter code below\n            </p>\n          </div>\n\n          <!--  -->\n\n          <!-- Login Form Inputs -->\n\n          <div class=\"login_inputs\">\n            <form action=\"\">\n\n              <div class=\"input_div\">\n                <span class=\"formLabel\"> Enter Code </span>\n                <input type=\"text\" name=\"\" id=\"\" placeholder=\"Enter Code\">\n                <div class=\"below_input\">\n\n                  <div class=\"left\">\n\n                    <p>\n                      Retry in <span>2:00</span>\n                    </p>\n\n                  </div>\n                  <div class=\"right\">\n\n                    <p>\n                      Did not get code. <span>Resend?</span>\n                    </p>\n\n                  </div>\n\n                </div>\n              </div>\n\n\n\n              <!-- <div class=\"btn_full_width green_btn\">\n                          <button>\n                              Login\n                          </button>\n                      </div> -->\n\n              <div class=\"btn_below_link\">\n\n                <div class=\"forLink prev_color\">\n                  <a href=\"#\">Previous</a>\n                </div>\n\n                <button class=\"forButton\" (click)=\"navigateToSignUp()\">\n                  Signup\n                </button>\n              </div>\n\n\n\n            </form>\n          </div>\n\n          <!--  -->\n\n        </div>\n\n      </div>\n\n      <!--  -->\n\n    </div>\n\n    <!--  -->\n\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/confirm-otp/confirm-otp.component.ts":
/*!******************************************************!*\
  !*** ./src/app/confirm-otp/confirm-otp.component.ts ***!
  \******************************************************/
/*! exports provided: ConfirmOtpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmOtpComponent", function() { return ConfirmOtpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ConfirmOtpComponent = /** @class */ (function () {
    function ConfirmOtpComponent(router) {
        this.router = router;
    }
    ConfirmOtpComponent.prototype.ngOnInit = function () {
    };
    ConfirmOtpComponent.prototype.navigateToSignUp = function () {
        this.router.navigate(['create-account']);
    };
    ConfirmOtpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-otp',
            template: __webpack_require__(/*! ./confirm-otp.component.html */ "./src/app/confirm-otp/confirm-otp.component.html"),
            styles: [__webpack_require__(/*! ./confirm-otp.component.css */ "./src/app/confirm-otp/confirm-otp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ConfirmOtpComponent);
    return ConfirmOtpComponent;
}());



/***/ }),

/***/ "./src/app/confirm-otp/confirm-otp.module.ts":
/*!***************************************************!*\
  !*** ./src/app/confirm-otp/confirm-otp.module.ts ***!
  \***************************************************/
/*! exports provided: ConfirmOtpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmOtpModule", function() { return ConfirmOtpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _confirm_otp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirm-otp.component */ "./src/app/confirm-otp/confirm-otp.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var routes = [
    { path: 'confirm-otp', component: _confirm_otp_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmOtpComponent"] }
];
var ConfirmOtpModule = /** @class */ (function () {
    function ConfirmOtpModule() {
    }
    ConfirmOtpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _confirm_otp_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmOtpComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], ConfirmOtpModule);
    return ConfirmOtpModule;
}());



/***/ }),

/***/ "./src/app/create-account/create-account.component.css":
/*!*************************************************************!*\
  !*** ./src/app/create-account/create-account.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1hY2NvdW50L2NyZWF0ZS1hY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/create-account/create-account.component.html":
/*!**************************************************************!*\
  !*** ./src/app/create-account/create-account.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\n  <div class=\"login_page_main_div\">\n\n    <!-- Login page Left Section -->\n\n    <div class=\"login_left_section\">\n\n      <!-- Company Logo -->\n\n      <div class=\"company_logo\">\n\n        <h3>\n          SFS\n        </h3>\n        <span>\n          Capital\n        </span>\n\n      </div>\n\n      <!--  -->\n\n      <!-- Welcome Note -->\n\n      <div class=\"welcome_note\">\n\n        <p>\n          Welcome to:\n        </p>\n\n        <h1>\n          SFS Financial <br> service Group\n        </h1>\n\n        <p>\n          product of a Management Buy-out of <br> Skye Financial Services Limited.\n        </p>\n\n      </div>\n\n      <!--  -->\n\n      <!-- Partners -->\n\n      <div class=\"patners_login_page\">\n\n        <!-- <div>\n                <!-- <i class=\"fab fa-accusoft\"></i>\n                <img src=\"../utils/icons/access.png\" alt=\"\">\n            </div>\n            <div>\n                <!-- <i class=\"fab fa-airbnb\"></i>\n                <img src=\"../utils/icons/bet.png\" alt=\"\">\n            </div>\n            <div>\n                <!-- <i class=\"fab fa-amazon-pay\"></i>\n                <img src=\"../utils/icons/branch.png\" alt=\"\">\n            </div>\n            <div>\n                <!-- <i class=\"fab fa-cpanel\"></i>\n                <img src=\"../utils/icons/fidel.png\" alt=\"\">\n            </div> -->\n\n      </div>\n\n      <!--  -->\n\n    </div>\n\n    <!--  -->\n\n    <!-- Login page right Section -->\n\n    <div class=\"login_right_section\">\n\n      <!-- Nav Section -->\n\n      <div class=\"login_mini_nav\">\n        <div>\n          <p>\n            Have an account?\n          </p>\n        </div>\n        <div>\n          <button class=\"btn_getStarted\" (click)=\"navigateToLogin()\">\n            Login\n          </button>\n        </div>\n      </div>\n\n      <!--  -->\n\n      <!-- Form Section -->\n\n      <div class=\"center_form\">\n\n        <div class=\"login_form_div\">\n\n          <!-- Login Form Title -->\n\n          <div class=\"form_title\">\n            <h1 class=\"create_acc_text\">\n              Create an account\n            </h1>\n            <p>\n              Lets onboard you so we will know who you are, it will only take a minute.\n            </p>\n          </div>\n\n          <!--  -->\n\n          <!-- Login Form Inputs -->\n\n          <div class=\"login_inputs\">\n            <form novalidate (ngSubmit)=\"submitSignUpForm()\" [formGroup]=\"signupForm\">\n\n              <div class=\"input_div\">\n                <span class=\"formLabel\"> First Name </span>\n                <input type=\"text\" id=\"\" placeholder=\"First Name\" formControlName=\"firstName\">\n                <span *ngIf=\"firstName.invalid && (firstName.dirty || firstName.touched)\">\n                  <ul>\n                    <li *ngIf=\"firstName.errors.required\" class=\"text-danger\">\n                      Please enter your firstname\n                    </li>\n                    <li *ngIf=\"firstName.errors.minlength\" class=\"text-danger\">\n                      Firstname can not be less than two characters\n                    </li>\n                  </ul>\n                </span>\n              </div>\n\n              <div class=\" input_div\">\n                <span class=\"formLabel\"> Last Name </span>\n                <input type=\"text\" id=\"\" placeholder=\"Last Name\" formControlName=\"lastName\">\n                <span *ngIf=\"lastName.invalid && (lastName.dirty || lastName.touched)\">\n                  <ul>\n                    <li *ngIf=\"lastName.errors.required\" class=\"text-danger\">\n                      Please enter your lastname\n                    </li>\n                    <li *ngIf=\"lastName.errors.minlength\" class=\"text-danger\">\n                      Lastname can not be less than two characters\n                    </li>\n                  </ul>\n                </span>\n              </div>\n\n              <div class=\"input_div\">\n                <span class=\"formLabel\"> Phone </span>\n                <input type=\"text\" id=\"\" placeholder=\"+2340000000000\" formControlName=\"phoneNumber\" maxLength=\"14\">\n                <span *ngIf=\"phoneNumber.invalid && (phoneNumber.dirty || phoneNumber.touched)\">\n                  <ul>\n                    <li *ngIf=\"phoneNumber.errors.required\" class=\"text-danger\">\n                      Please enter your phone number in the format specified\n                    </li>\n                    <li *ngIf=\"phoneNumber.errors.minlength\" class=\"text-danger\">\n                      Phone number can not be less than 14 characters\n                    </li>\n                    <li *ngIf=\"phoneNumber.errors.maxlength\" class=\"text-danger\">\n                      Phone number can not be more than 14 digits\n                    </li>\n                    <li *ngIf=\"phoneNumber.errors.pattern\" class=\"text-danger\">\n                      Invalid phone number\n                    </li>\n                  </ul>\n                </span>\n              </div>\n\n              <div class=\"input_div\">\n                <span class=\"formLabel\"> Email </span>\n                <input type=\"email\" id=\"\" placeholder=\"Email Address\" formControlName=\"email\">\n                <span *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n                  <ul>\n                    <li *ngIf=\"email.errors.required\" class=\"text-danger\">\n                      Please enter your email\n                    </li>\n                    <li *ngIf=\"email.errors.email\" class=\"text-danger\">\n                      invalid email\n                    </li>\n                  </ul>\n                </span>\n              </div>\n\n              <div class=\"input_div\">\n                <span class=\"formLabel\"> Password </span>\n                <input type=\"password\" id=\"\" placeholder=\"Password\" formControlName=\"password\">\n                <span *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n                  <ul>\n                    <li *ngIf=\"password.errors.required\" class=\"text-danger\">\n                      Please enter a password\n                    </li>\n                    <li *ngIf=\"password.errors.minlength\" class=\"text-danger\">\n                      Password can not be less than 6 characters\n                    </li>\n                  </ul>\n                </span>\n              </div>\n\n              <div class=\"input_div\">\n                <span class=\"formLabel\"> Confirm Password </span>\n                <input type=\"password\" id=\"\" placeholder=\"Confirm Password\" formControlName=\"comparePassword\">\n                <span *ngIf=\"comparePassword.invalid && (comparePassword.dirty || comparePassword.touched)\">\n                  <ul>\n                    <li *ngIf=\"comparePassword.errors.required\" class=\"text-danger\">\n                      Please confirm your password\n                    </li>\n                    <li *ngIf=\"comparePassword.errors.compare\" class=\"text-danger\">\n                      Passwords must match\n                    </li>\n                  </ul>\n                </span>\n              </div>\n\n              <!-- <div class=\"btn_full_width green_btn\">\n                            <button>\n                                Login\n                            </button>\n                        </div> -->\n\n              <div class=\"btn_below_link\">\n\n                <div class=\"forLink prev_color\">\n                  <a href=\"#\">Previous</a>\n                </div>\n\n                <div class=\"forButton\">\n                  <button class=\"btn btn1\" type=\"submit\" [disabled]=\"!signupForm.valid\" href=\"#\">Signup</button>\n                </div>\n              </div>\n\n            </form>\n          </div>\n          <!-- {{confirmPassword.errors['compare']}} -->\n          <!-- <br>Dirty: {{signupForm.dirty}}\n          <br>Touched: {{signupForm.touched}}\n          <br>Valid: {{signupForm.valid}}\n          <br>Value: {{signupForm.value | json}} -->\n          <!--  -->\n\n        </div>\n\n      </div>\n\n      <!--  -->\n\n    </div>\n\n    <!--  -->\n\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/create-account/create-account.component.ts":
/*!************************************************************!*\
  !*** ./src/app/create-account/create-account.component.ts ***!
  \************************************************************/
/*! exports provided: CreateAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountComponent", function() { return CreateAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils */ "./src/app/shared/utils.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");






// validator function
// function mustMatch(controlName: string, matchingControlName: string): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: boolean } | null => {
//     const controlToCompare = control.root.get(controlName);
//     const matchingControl = control.root.get(matchingControlName);
//     // return if another validator has found an error on the matching control
//     if (matchingControl.errors && !matchingControl.errors.mustMatch) {
//       return;
//     }
//     console.log(`confirm password ${matchingControl.value}`);
//     // set error on matchingControl if match validation fails
//     if (matchingControl.value != null && (matchingControl.value === controlToCompare.value)) {
//       return { 'mustMatch': true };
//     }
//     return null;
//   }
// }
var CreateAccountComponent = /** @class */ (function () {
    function CreateAccountComponent(router, formBuilder, authService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.phoneNumberRegex = '^[+][0-9]*$';
    }
    CreateAccountComponent.prototype.ngOnInit = function () {
        this.signupForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            phoneNumber: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(14),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(14),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.phoneNumberRegex),
                ]
            ],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            comparePassword: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _shared_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].compareValidator('password')
                ]
            ]
        });
        console.log(this.signupForm.get('comparePassword').errors);
    };
    CreateAccountComponent.prototype.navigateToLogin = function () {
        this.router.navigate(['login']);
    };
    Object.defineProperty(CreateAccountComponent.prototype, "firstName", {
        get: function () {
            return this.signupForm.get('firstName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateAccountComponent.prototype, "lastName", {
        get: function () {
            return this.signupForm.get('lastName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateAccountComponent.prototype, "phoneNumber", {
        get: function () {
            return this.signupForm.get('phoneNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateAccountComponent.prototype, "email", {
        get: function () {
            return this.signupForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateAccountComponent.prototype, "password", {
        get: function () {
            return this.signupForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateAccountComponent.prototype, "comparePassword", {
        get: function () {
            return this.signupForm.get('comparePassword');
        },
        enumerable: true,
        configurable: true
    });
    CreateAccountComponent.prototype.navigateToConfirmOtp = function () {
        this.router.navigate(['confirm-otp']);
    };
    CreateAccountComponent.prototype.submitSignUpForm = function () {
        this.navigateToConfirmOtp();
        // const request: SignUpRequest = this.signupForm.value;
        // let result: any;
        // this.authService.createAccount(request)
        //   .subscribe(
        //     (response: SignUpResponse) => result = response,
        //     (error: any) => console.log(error)
        //   );
        // console.log(`post response => ${result}`);
        // if (result && (result.status === 200 || result.status === 201)) {
        //   // redirect to otp page
        // }
    };
    CreateAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-account',
            template: __webpack_require__(/*! ./create-account.component.html */ "./src/app/create-account/create-account.component.html"),
            styles: [__webpack_require__(/*! ./create-account.component.css */ "./src/app/create-account/create-account.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], CreateAccountComponent);
    return CreateAccountComponent;
}());



/***/ }),

/***/ "./src/app/create-account/create-account.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/create-account/create-account.module.ts ***!
  \*********************************************************/
/*! exports provided: CreateAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountModule", function() { return CreateAccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _create_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-account.component */ "./src/app/create-account/create-account.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var routes = [
    { path: 'create-account', component: _create_account_component__WEBPACK_IMPORTED_MODULE_3__["CreateAccountComponent"] }
];
var CreateAccountModule = /** @class */ (function () {
    function CreateAccountModule() {
    }
    CreateAccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _create_account_component__WEBPACK_IMPORTED_MODULE_3__["CreateAccountComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ]
        })
    ], CreateAccountModule);
    return CreateAccountModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"first\">\n  <div class=\"inner\">\n    <div class=\"left\">\n\n      <div class=\"logo\">\n        <img src=\"../assets/images/logo.png\" alt=\"\">\n      </div>\n\n      <div class=\"header_title\">\n        <span>\n          Our Mission is to <br> Empower your <br> financial Freedom\n        </span>\n      </div>\n\n      <div class=\"header_text\">\n        <p>\n          Do not allow life happen to you, come to us with your dreams\n          of a better life for you and your family and we will make it\n          happen.\n        </p>\n      </div>\n\n      <div class=\"header_btn\">\n\n        <a href=\"\" class=\"start\">Get started now</a>\n        <a href=\"\" class=\"learn\">Learn more about us</a>\n\n      </div>\n\n    </div>\n    <div class=\"right\">\n\n      <div>\n\n        <button class=\"login\" (click)=\"navigateToLogin()\">\n          Login\n        </button>\n\n      </div>\n\n      <div>\n        <button class=\"signup\" (click)=\"navigateToCreateAccount()\">\n          Signup\n        </button>\n      </div>\n\n\n\n    </div>\n  </div>\n</div>\n\n<div class=\"second\">\n\n  <div class=\"second_container\">\n\n    <div class=\"second_title\">\n      <h4>\n        Your guide to financial <br> wellness\n      </h4>\n    </div>\n\n    <div class=\"services\">\n      <div class=\"each_service\">\n        <div class=\"service_icon\">\n          <div>\n            <img src=\"../assets/icons/service1.png\" alt=\"\">\n          </div>\n        </div>\n\n        <div class=\"service_title\">\n          <h4>\n            Invest your spare change\n          </h4>\n        </div>\n\n        <div class=\"service_text\">\n          <p>\n            Save time, avoid losing work and information, delegate, and track tasks to stay on schedule\n          </p>\n        </div>\n      </div>\n      <div class=\"each_service\">\n        <div class=\"service_icon\">\n          <div>\n            <img src=\"../assets/icons/service2.png\" alt=\"\">\n          </div>\n        </div>\n\n        <div class=\"service_title\">\n          <h4>\n            Save for later\n          </h4>\n        </div>\n\n        <div class=\"service_text\">\n          <p>\n            Get ready for later in life using sfs Later, the easiest way to save for retirement.\n          </p>\n        </div>\n      </div>\n\n      <div class=\"each_service\">\n        <div class=\"service_icon\">\n          <div>\n            <img src=\"../assets/icons/service3.png\" alt=\"\">\n          </div>\n        </div>\n\n        <div class=\"service_title\">\n          <h4>\n            Grow your knowledge\n          </h4>\n        </div>\n\n        <div class=\"service_text\">\n          <p>\n            Learn how to get more from your money with easy-to-understand articles and videos from\n            financial experts.\n          </p>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n\n</div>\n\n<div class=\"third\">\n\n  <div class=\"third_up\">\n    <div class=\"up_left\">\n      <img src=\"../assets/images/up.png\" alt=\"\">\n    </div>\n    <div class=\"up_right\">\n      <h4>\n        Security that's strong as oak\n      </h4>\n      <p>\n        Do you waste time organizing sticky notes, searching\n        your email and apps for to-dos, and figuring out what to work on first?\n        Then you need one\n        solution to prioritize your tasks, manage your time, and meet your deadlines.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"third_up\">\n    <div class=\"up_right\">\n      <h4>\n        Why you should invest in your future\n      </h4>\n      <p>\n        Do you waste time organizing sticky notes, searching\n        your email and apps for to-dos, and figuring out what to work on first?\n        Then you need one\n        solution to prioritize your tasks, manage your time, and meet your deadlines.\n      </p>\n    </div>\n    <div class=\"up_left\">\n      <img src=\"../assets/images/down.png\" alt=\"\">\n    </div>\n\n  </div>\n\n</div>\n\n<div class=\"fourth\">\n\n  <div class=\"second_container\">\n    <h4>\n      What investors like you <b>are</b><br>\n      <b>saying about</b> SFS\n    </h4>\n  </div>\n\n  <div class=\"comments\">\n\n    <div class=\"each_comments_div\">\n\n      <div class=\"each_comments\">\n\n        <div class=\"name_role\">\n          <p>\n            Fernando Soler\n          </p>\n          <span>\n            Telecommunication Engineer\n          </span>\n        </div>\n\n        <div class=\"comment_text\">\n          <p>\n            Quis autem vel eum iure reprehenderit qui in ea voluptate velit\n            esse quam nihil molestiae consequatur, vel illum qui dolorem eum\n            fugiat quo voluptas nulla pariatur? At vero eos et\n          </p>\n        </div>\n\n      </div>\n\n      <div class=\"each_comments\">\n\n        <div class=\"name_role\">\n          <p>\n            Fernando Soler\n          </p>\n          <span>\n            Telecommunication Engineer\n          </span>\n        </div>\n\n        <div class=\"comment_text\">\n          <p>\n            Quis autem vel eum iure reprehenderit qui in ea voluptate velit\n            esse quam nihil molestiae consequatur, vel illum qui dolorem eum\n            fugiat quo voluptas nulla pariatur? At vero eos et\n          </p>\n        </div>\n\n      </div>\n\n      <div class=\"each_comments\">\n\n        <div class=\"name_role\">\n          <p>\n            Fernando Soler\n          </p>\n          <span>\n            Telecommunication Engineer\n          </span>\n        </div>\n\n        <div class=\"comment_text\">\n          <p>\n            Quis autem vel eum iure reprehenderit qui in ea voluptate velit\n            esse quam nihil molestiae consequatur, vel illum qui dolorem eum\n            fugiat quo voluptas nulla pariatur? At vero eos et\n          </p>\n        </div>\n\n      </div>\n\n      <div class=\"each_comments\">\n\n        <div class=\"name_role\">\n          <p>\n            Fernando Soler\n          </p>\n          <span>\n            Telecommunication Engineer\n          </span>\n        </div>\n\n        <div class=\"comment_text\">\n          <p>\n            Quis autem vel eum iure reprehenderit qui in ea voluptate velit\n            esse quam nihil molestiae consequatur, vel illum qui dolorem eum\n            fugiat quo voluptas nulla pariatur? At vero eos et\n          </p>\n        </div>\n\n      </div>\n\n    </div>\n\n\n  </div>\n\n</div>\n\n<div class=\"footer\">\n\n  <div class=\"second_container\">\n\n    <div class=\"futa_header\">\n\n      <div class=\"text_1\">\n        <h5>\n          Our <br> channels\n        </h5>\n      </div>\n      <div class=\"text_2\">\n        <p>\n          Get access to sfs life using <br> any of the following plaforms\n        </p>\n      </div>\n\n    </div>\n\n    <div class=\"footer_icon_widget\">\n\n      <div class=\"ft_1\">\n\n        <div class=\"icon_img\">\n          <img src=\"../assets/icons/v3.png\" alt=\"\">\n        </div>\n\n        <div class=\"download_inst\">\n          <span>\n            <i class=\"fas fa-download\"></i> Download on <br> Play Store\n          </span>\n        </div>\n\n      </div>\n      <div class=\"ft_2\">\n        <div class=\"icon_img\">\n          <img src=\"../assets/icons/v2.png\" alt=\"\">\n        </div>\n\n        <div class=\"download_inst\">\n          <span>\n            <i class=\"fas fa-download\"></i> Download on <br> App Store\n          </span>\n        </div>\n      </div>\n      <div class=\"ft_3\">\n        <div class=\"icon_img\">\n          <img src=\"../assets/icons/v1.png\" alt=\"\">\n        </div>\n\n        <div class=\"download_inst\">\n          <span>\n            <i class=\"fas fa-download\"></i> Get Started <br> Online\n          </span>\n        </div>\n      </div>\n      <div class=\"ft_4\">\n\n        <p>\n          Contact us for more infomation\n        </p>\n\n        <p>\n          Info@sfsnigeria.com\n        </p>\n\n        <p>\n          098-793 079-383\n        </p>\n\n      </div>\n\n    </div>\n\n    <div class=\"last_futa_section\">\n\n      <div>\n        <a href=\"#\"> FAQ </a>\n      </div>\n      <div>\n        <a href=\"#\"> Terms & Conditions </a>\n      </div>\n      <div>\n        <a href=\"#\"> Privacy Policy </a>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.navigateToLogin = function () {
        this.router.navigate(['login']);
    };
    HomeComponent.prototype.navigateToCreateAccount = function () {
        this.router.navigate(['create-account']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var routes = [
    { path: 'home', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\n  <div class=\"login_page_main_div\">\n\n    <!-- Login page Left Section -->\n\n    <div class=\"login_left_section\">\n\n      <!-- Company Logo -->\n\n      <div class=\"company_logo\">\n\n        <h3>\n          SFS\n        </h3>\n        <span>\n          Capital\n        </span>\n\n      </div>\n\n      <!--  -->\n\n      <!-- Welcome Note -->\n\n      <div class=\"welcome_note\">\n\n        <p>\n          Welcome to:\n        </p>\n\n        <h1>\n          SFS Financial <br> service Group\n        </h1>\n\n        <p>\n          product of a Management Buy-out of <br> Skye Financial Services Limited.\n        </p>\n\n      </div>\n\n      <!--  -->\n\n      <!-- Partners -->\n\n      <div class=\"patners_login_page\">\n\n        <!-- <div>\n                <!-- <i class=\"fab fa-accusoft\"></i>\n                <img src=\"../utils/icons/access.png\" alt=\"\">\n            </div>\n            <div>\n                <!-- <i class=\"fab fa-airbnb\"></i>\n                <img src=\"../utils/icons/bet.png\" alt=\"\">\n            </div>\n            <div>\n                <!-- <i class=\"fab fa-amazon-pay\"></i>\n                <img src=\"../utils/icons/branch.png\" alt=\"\">\n            </div>\n            <div>\n                <!-- <i class=\"fab fa-cpanel\"></i>\n                <img src=\"../utils/icons/fidel.png\" alt=\"\">\n            </div> -->\n\n      </div>\n\n      <!--  -->\n\n    </div>\n\n    <!--  -->\n\n    <!-- Login page right Section -->\n\n    <div class=\"login_right_section\">\n\n      <!-- Nav Section -->\n\n      <div class=\"login_mini_nav\">\n        <div>\n          <p>\n            Don’t have an account?\n          </p>\n        </div>\n        <div>\n          <button class=\"btn_getStarted\" (click)=\"navigateToCreateAccount()\">\n            Signup\n          </button>\n        </div>\n      </div>\n\n      <!--  -->\n\n      <!-- Form Section -->\n\n      <div class=\"center_form\">\n        <div class=\"login_form_div pt-5\">\n\n          <!-- Login Form Title -->\n\n          <div class=\"form_title\">\n            <h1 class=\"create_acc_text\">\n              Login\n            </h1>\n            <p>\n              Sign in with your username or email <br> and password\n            </p>\n          </div>\n\n          <!--  -->\n\n          <!-- Login Form Inputs -->\n\n          <div class=\"login_inputs\">\n            <form action=\"\">\n\n              <div class=\"input_div\">\n                <span class=\"formLabel\"> Username </span>\n                <input type=\"text\" name=\"\" id=\"\" placeholder=\"Username\">\n              </div>\n\n              <div class=\"input_div\">\n                <span class=\"formLabel\"> Password </span>\n                <input type=\"password\" name=\"\" id=\"\" placeholder=\"Password\">\n              </div>\n\n              <!-- <div class=\"btn_full_width green_btn\">\n                            <button>\n                                Login\n                            </button>\n                        </div> -->\n\n              <div class=\"btn_below_link\">\n                <div class=\"forButton\">\n                  <a href=\"#\">Login</a>\n                </div>\n                <div class=\"forLink\">\n                  <a href=\"#\">Forgot Password?</a>\n                </div>\n              </div>\n\n\n\n            </form>\n          </div>\n\n          <!--  -->\n\n        </div>\n      </div>\n\n      <!--  -->\n\n    </div>\n\n    <!--  -->\n\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.navigateToCreateAccount = function () {
        this.router.navigate(['create-account']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var routes = [
    { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthService = /** @class */ (function () {
    function AuthService(httpClient) {
        this.httpClient = httpClient;
    }
    AuthService.prototype.createAccount = function (signUpReq) {
        return this.httpClient.post('http://sfs-digital.herokuapp.com/api/Customer/create', signUpReq, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/service.module.ts":
/*!********************************************!*\
  !*** ./src/app/services/service.module.ts ***!
  \********************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils */ "./src/app/shared/utils.ts");





var ServiceModule = /** @class */ (function () {
    function ServiceModule(parentModule) {
        _shared_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].throwIfAlreadyLoaded(parentModule, 'ServiceModule');
    }
    ServiceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ServiceModule])
    ], ServiceModule);
    return ServiceModule;
}());



/***/ }),

/***/ "./src/app/shared/utils.ts":
/*!*********************************!*\
  !*** ./src/app/shared/utils.ts ***!
  \*********************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.compareValidator = function (controlName) {
        return function (control) {
            if (control.value === null || control.value.length === 0) {
                return null;
            }
            var controlToCompare = control.root.get(controlName);
            if (controlToCompare) {
                var subscription_1 = controlToCompare.valueChanges.subscribe(function () {
                    control.updateValueAndValidity();
                    subscription_1.unsubscribe();
                });
            }
            return controlToCompare && controlToCompare.value !== control.value ? { compare: true } : null;
        };
    };
    // checks if a module has already been loaded to avoid more than one module instance as
    // modules need to be singleton
    Utils.throwIfAlreadyLoaded = function (parentModule, moduleName) {
        if (parentModule) {
            throw new Error(moduleName + " has already been loaded. Import service modules in app module only");
        }
    };
    return Utils;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gokolie/Desktop/sfs-angular/sfs-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map