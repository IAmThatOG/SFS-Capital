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

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans&display=swap\");\n/* general */\n* {\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  padding: 0;\n  margin: 0;\n  font-family: \"Fira Sans\", sans-serif;\n}\nbody {\n  background-color: rgb(253, 253, 253) !important;\n}\n::-webkit-scrollbar {\n  background: transparent;\n  width: 8px;\n  height: 8px;\n}\n::-webkit-scrollbar-thumb {\n  background-color: #15214457;\n  border-radius: 20px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background-color: rgba(0, 0, 0, 0.3);\n}\ninput[type=\"text\"],\ninput[type=\"password\"],\ninput[type=\"file\"],\ninput[type=\"date\"],\ninput[type=\"email\"],\nselect,\ntextarea {\n  width: 100%;\n  background: rgba(207, 216, 234, 0.3) !important;\n  border: 1px solid #cfd8ea !important;\n  border-radius: 2px !important;\n  padding: 18px !important;\n  margin-top: 8px;\n}\n.input_div {\n  overflow: auto;\n  width: 100%;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.input_div .formLabel {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: rgba(4, 25, 66, 0.3);\n}\ninput:focus,\nselect:focus,\ntextarea {\n  outline: none !important;\n}\n.input_div .below_input {\n  width: 100%;\n  padding: 10px 0;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.input_div .below_input .left p {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 14px;\n  color: #828282;\n}\n.input_div .below_input .left p span {\n  color: #002058;\n}\n.input_div .below_input .right p {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 14px;\n  color: #828282;\n}\n.input_div .below_input .right p span {\n  color: #f9a825;\n}\n.btn_full {\n  width: 100%;\n  padding: 15px 0;\n}\n.btn_full button {\n  width: 100%;\n  padding: 15px 0;\n\n  background-color: #ffd873;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  color: #041942;\n  font-weight: bold;\n  border: none;\n}\n.half_input_div {\n  display: flex;\n\n  justify-content: space-between;\n}\n.half_input_div .col_6 {\n  width: 48%;\n}\n/* End of general */\n/* first section */\ndiv.first {\n  width: 100%;\n  overflow: auto;\n  /* height: 900px; */\n  padding: 100px 250px 230px 250px;\n  background-image: url('headerImg.png');\n  background-position: top right;\n  /* background-size: 983px 970px; */\n  background-repeat: no-repeat;\n}\ndiv.inner {\n  display: flex;\n  flex-direction: row;\n}\ndiv.inner div.left,\ndiv.inner div.right {\n  width: 50%;\n}\n/* div.inner div div.left {\n\n}\n\ndiv.inner div div.right {\n\n} */\ndiv.inner div.left .logo {\n  width: 100%;\n  overflow: auto;\n}\ndiv.inner div.left .header_title {\n  width: 100%;\n  padding-top: 85px;\n}\ndiv.inner div.left .header_title span {\n  font-weight: 500;\n  font-size: 45px;\n  color: #002058;\n}\ndiv.inner div.left .header_text {\n  width: 100%;\n  padding: 30px 0;\n}\ndiv.inner div.left .header_text p {\n  font-weight: 500;\n  font-size: 16px;\n  color: rgba(0, 32, 88, 0.6);\n}\ndiv.inner div.left .header_btn {\n  width: 100%;\n\n  display: flex;\n  flex-direction: row;\n}\ndiv.inner div.left .header_btn a.start {\n  background-color: #ffd873;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  font-weight: bold;\n  font-size: 16px;\n  padding: 8px 25px;\n  margin-right: 20px;\n  color: #041942;\n  text-decoration: none;\n}\ndiv.inner div.left .header_btn a.learn {\n  padding: 8px 25px;\n  color: #041942;\n  font-weight: bold;\n  font-size: 12px;\n  border: 0.7px solid #002058;\n  border-radius: 4px;\n  text-decoration: none;\n}\ndiv.inner div.right {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\ndiv.inner div.right div:first-child {\n  margin-right: 20px;\n}\ndiv.inner div.right button.login {\n  padding: 9px 26px;\n  border: none;\n  background-color: transparent;\n  color: white;\n}\ndiv.inner div.right button.signup {\n  padding: 9px 26px;\n  border: none;\n  background-color: #ffd873;\n  color: #041942;\n  border-radius: 2px;\n}\n/* End of first section */\n/* Second section */\ndiv.second {\n  width: 100%;\n  padding: 100px 0 0 0;\n}\n.second_title {\n  width: 100%;\n  text-align: center;\n  padding-bottom: 70px;\n}\n.second_title h4 {\n  font-weight: 500;\n  font-size: 40px;\n  line-height: 48px;\n  color: rgba(0, 32, 88, 0.8);\n}\n.second_container {\n  width: 80%;\n  margin: 0 auto;\n  overflow: auto;\n}\n.second_container .services {\n  width: 100%;\n\n  display: flex;\n  flex-direction: row;\n}\n.second_container .services .each_service {\n  width: 33.33%;\n  text-align: center;\n}\n.second_container .services .each_service .service_icon {\n  width: 100%;\n  padding-bottom: 30px;\n}\n.second_container .services .each_service .service_icon div {\n  width: 21%;\n  margin: 0 auto;\n  padding: 10px 17px;\n  background-color: #fff;\n  border-radius: 6px;\n  box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.06);\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.each_service .service_title {\n  width: 100%;\n  text-align: center;\n}\n.each_service .service_title h4 {\n  font-weight: bold;\n  font-size: 25px;\n  line-height: 30px;\n  color: rgba(0, 32, 88, 0.7);\n}\n.each_service .service_text {\n  width: 100%;\n  text-align: center;\n  padding: 5px 100px;\n}\n.each_service .service_text p {\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 26px;\n  color: #b3b3b3;\n}\n/* End of second section */\n/* Third section */\ndiv.third {\n  width: 100%;\n  overflow: auto;\n  /* height: 2900px; */\n  padding: 410px 100px 270px 100px;\n  background-image: url('new.png');\n  background-position: top left;\n  /* background-size: 983px 970px; */\n  background-repeat: no-repeat;\n}\ndiv.third .third_up {\n  width: 100%;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.third_up .up_left {\n}\n.hide_img {\n  display: none;\n}\n.third_up .up_right {\n  width: 35%;\n}\n.third_up .up_right h4 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 40px;\n  color: #ffffff;\n}\n.third_up .up_right p {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 28px;\n  color: #ffffff;\n  padding-top: 25px;\n}\n/* End of third section */\n/* Fourth Section */\ndiv.fourth {\n  width: 100%;\n\n  background-image: url('quote.png');\n  background-position: 100px 30px;\n  /* background-size: 983px 970px; */\n  background-repeat: no-repeat;\n}\ndiv.fourth div.second_container h4 {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 40px;\n  line-height: 48px;\n  color: #273444;\n}\ndiv.fourth .comments {\n  padding: 100px 0;\n  width: 100%;\n  overflow: scroll;\n}\ndiv.fourth .comments::-webkit-scrollbar {\n  display: none;\n}\n.comments .each_comments_div .each_comments {\n  padding: 30px;\n  box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.03);\n  width: 400px;\n  margin-right: 30px;\n  float: left;\n  overflow: auto;\n  cursor: pointer;\n\n  transition: box-shadow 0.4s;\n}\n.comments .each_comments_div .each_comments:hover {\n  box-shadow: 0 3px 1px 1px rgba(0, 0, 0, 0.06);\n}\n.comments .each_comments_div .each_comments .name_role {\n  padding-bottom: 25px;\n}\n.comments .each_comments_div .each_comments .name_role p {\n  margin: 0 !important;\n  padding: 0 !important;\n\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  color: #002058;\n}\n.comments .each_comments_div .each_comments .name_role span {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 22px;\n  color: #002058;\n}\n.footer {\n  width: 100%;\n  background-color: #152144;\n  padding: 70px 0;\n}\n.footer .futa_header {\n  width: 100%;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.footer .futa_header .text_1 {\n  margin-right: 20px;\n}\n.footer .futa_header .text_1 h5 {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 54px;\n  display: flex;\n  color: #ffffff;\n}\n.footer .futa_header .text_2 p {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  color: rgb(255, 255, 255, 0.5);\n}\n.footer .footer_icon_widget {\n  width: 100%;\n  padding-top: 100px;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.footer .footer_icon_widget div {\n  padding: 5px 15px;\n  width: 25%;\n}\n.footer .footer_icon_widget div .download_inst {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  color: #ffffff;\n  padding-top: 17px;\n}\n.footer .footer_icon_widget div .download_inst i {\n  margin-right: 8px;\n}\n.footer .footer_icon_widget .icon_img {\n  width: 66px;\n  height: 66px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.1);\n  clear: both;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.footer .footer_icon_widget .icon_img img {\n}\n.footer .footer_icon_widget .download_inst {\n  width: 100%;\n  text-align: center;\n}\n.footer .footer_icon_widget .ft_2 {\n  border-left: 1px solid rgba(255, 255, 255, 0.3);\n  border-right: 1px solid rgba(255, 255, 255, 0.3);\n}\n.footer .footer_icon_widget .ft_4 {\n  background-color: #f9a825;\n  border-radius: 20px;\n  padding: 35px;\n  color: #fff;\n}\n.footer .last_futa_section {\n  width: 100%;\n  padding-top: 80px;\n\n  display: flex;\n  flex-direction: row;\n}\n.footer .last_futa_section div {\n  padding: 10px 25px 10px 0;\n}\n.footer .last_futa_section div a {\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 19px;\n  color: rgba(255, 255, 255, 0.558);\n  transition: 0.4s;\n}\n.footer .last_futa_section div a:hover {\n  color: #fff;\n}\n/* End of fourth Section */\n/* Login Page */\n.login_left_section {\n  width: 40%;\n  height: 100vh;\n  padding: 60px;\n  background: linear-gradient(rgb(0, 32, 88, 0.8), rgb(0, 32, 88, 0.8)),\n    url('people.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  float: left;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: fixed;\n}\n.company_logo {\n  width: 100%;\n  overflow: auto;\n  float: left;\n\n  color: white;\n}\n.login_left_section .company_logo h3 {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 47px;\n  color: #ffffff;\n  margin-bottom: 0;\n}\n.login_left_section .company_logo span {\n  letter-spacing: 2px;\n}\n.welcome_note {\n  width: 100%;\n  float: left;\n  align-self: center;\n  color: white;\n}\n.welcome_note h1 {\n  padding-bottom: 16px;\n}\n.welcome_note p:first-child {\n  font-size: 25px;\n  line-height: 21px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.welcome_note p:nth-child(2) {\n  font-size: 20px;\n  line-height: 21px;\n  color: rgba(255, 255, 255, 0.7);\n  word-spacing: 2px !important;\n}\n.patners_login_page {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n\n  color: white;\n  font-size: 30px;\n\n  padding: 30px;\n  width: 100%;\n}\n.login_right_section {\n  width: calc(100% - 40%);\n  float: left;\n  margin-left: 40%;\n  padding-bottom: 100px;\n}\n.login_mini_nav_two {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n\n  padding: 60px;\n}\n.login_mini_nav_two p {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 16px;\n  color: #002058;\n}\n.login_mini_nav_two p i {\n  margin-right: 15px;\n}\n.login_mini_nav {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n\n  padding: 60px;\n}\n.login_mini_nav p {\n  margin-top: 10px;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 19px;\n  color: rgba(0, 32, 88, 0.5);\n}\n.btn_getStarted {\n  border: none;\n  padding: 11px 27px;\n  box-shadow: 0px 5px 20px rgba(24, 37, 56, 0.1);\n  background-color: #ffffff;\n  border-radius: 4px;\n  cursor: pointer;\n\n  transition: box-shadow 0.3s, transform 0.2s;\n\n  font-weight: 600;\n  font-size: 14px;\n  color: #002058;\n}\n.btn_getStarted:hover {\n  box-shadow: 0px 5px 5px rgba(24, 37, 56, 0.1);\n}\n.btn_getStarted:active {\n  outline: none !important;\n  transform: translateY(4px);\n}\n.login_mini_nav div {\n  margin-left: 1.5%;\n  margin-right: 1.5%;\n}\n.login_form_div {\n  width: 50%;\n  /* margin: 40px 10%; */\n  background: #ffffff;\n  /* box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15); */\n  /* border-radius: 5px; */\n  /* padding: 60px; */\n  overflow: auto;\n}\n.center_form {\n  width: 100%;\n  overflow: auto;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.form_title {\n  width: 100%;\n}\n/* .form_title h1 {\n    font-weight: 800;\n    font-size: 36px;\n    line-height: 49px;\n} */\n.form_title p {\n  font-weight: 500;\n  font-size: 16px;\n  color: rgba(0, 32, 88, 0.4);\n}\n.btn_below_link {\n  width: 100%;\n  overflow: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-bottom: 15px;\n  padding-top: 30px;\n}\n.leta_space {\n  letter-spacing: 5px;\n}\n.btn_below_link a {\n  color: #002058;\n  text-decoration: none;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 19px;\n  transition: 0.3s;\n}\n.btn_below_link a:hover {\n  text-decoration: none;\n  letter-spacing: 1px;\n}\n.btn_below_link div.forButton a {\n  padding: 11px 75px;\n  background-color: #ffd873;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n}\n.create_acc_text {\n  font-weight: bold;\n  font-size: 38px;\n  line-height: 130%;\n  color: #002058;\n}\n.prev_color a {\n  color: #f9a825;\n}\n/* End of login Page */\n/* ACCT Success page */\n.center_form_success {\n  width: 100%;\n  overflow: auto;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n\n  height: calc(100vh - 152px);\n\n  /* background-color: pink; */\n}\n.acc_success_div {\n  width: 70%;\n  overflow: auto;\n  height: 80%;\n}\n.acc_success_div .check_img {\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n}\n.center_form_success .success_texts {\n  width: 100%;\n  text-align: center;\n  padding: 40px 0 40px 0;\n}\n.center_form_success .success_texts h4 {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 34px;\n  line-height: 41px;\n  color: #002058;\n}\n.center_form_success .success_texts p {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 145.8%;\n  color: rgb(21, 21, 21, 0.5);\n  padding-top: 20px;\n}\n.btn_continue {\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n}\n.btn_continue button {\n  border: none;\n  background-color: #ffd873;\n  color: #041942;\n  padding: 12px 100px;\n  font-weight: bold;\n\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n\n  transition: 0.4s;\n}\n.btn_continue button:active {\n  transform: translateY(4px);\n  outline: none !important;\n}\n.notification_green {\n  width: 100%;\n  padding: 28px 19px;\n  background-color: #6fcf97;\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);\n  border-radius: 2px;\n\n  margin-bottom: 40px;\n}\n.notification_green p {\n  padding: 0;\n  margin: 0;\n  font-size: 14px;\n  line-height: 18px;\n  color: #ffffff;\n}\n.notification_green p i {\n  margin-right: 10px;\n  font-size: 18px;\n}\n/* End of ACCT Success page */\n/* Dashboard */\n/* Side Nav */\n.side_nav {\n  width: 20%;\n  height: 100vh;\n  overflow-y: scroll;\n  position: fixed;\n  background-color: #152144;\n  color: #fff;\n  padding: 20px 30px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.side_nav .site_logo {\n  width: 100%;\n  overflow: auto;\n}\n.side_nav .side_links {\n  width: 100%;\n  overflow: auto;\n}\n.side_nav .side_links ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n.side_nav .side_links ul li {\n}\n.side_nav .side_links ul li a {\n  display: block;\n  padding: 10px 0;\n  margin: 5px 0;\n  color: rgba(255, 255, 255, 0.422);\n  transition: 0.3s;\n\n  font-weight: 500;\n  font-size: 14px;\n}\n.side_nav .side_links ul li a i {\n  margin-right: 20px;\n  font-size: 20px;\n}\n.side_nav .side_links ul li a:hover {\n  color: #fff;\n  text-decoration: none;\n}\n.side_nav .sideNav_footer {\n  width: 100%;\n  /* text-align: center; */\n  padding: 150px 0 5px 0;\n}\n.side_nav .sideNav_footer p {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 12px;\n  color: rgba(255, 255, 255, 0.5);\n}\n/* End of side Nav */\n/* Dasboard Body */\n.dashboard_body {\n  width: 80%;\n  margin-left: 20%;\n  overflow: auto;\n}\n.dashboard_body .dasboard_nav {\n  width: 100%;\n  padding: 15px 30px;\n  border-bottom: 1px solid rgba(178, 183, 188, 0.2);\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.dashboard_body .dasboard_nav .notification {\n  padding: 10px 8px;\n  text-align: center;\n  background-color: #f9a825;\n  border-radius: 50px;\n  width: 33%;\n}\n.dashboard_body .dasboard_nav .notification p {\n  font-weight: normal;\n  font-size: 14px;\n  text-transform: lowercase;\n  color: #ffffff;\n  padding: 0;\n  margin: 0;\n}\n.dasboard_nav .user_sett {\n  /* width: 10%; */\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.dasboard_nav .user_sett .user_image {\n  margin-right: 15px;\n}\n.dasboard_nav .user_sett .user_name p {\n  margin: 0;\n  padding: 0;\n}\n.dashboard_body .dashboard_body_content {\n  width: 100%;\n  padding: 30px 40px;\n  overflow: auto;\n}\n.dashboard_body .dashboard_body_content .welcome_n_button {\n  width: 100%;\n  padding: 50px 0;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.dashboard_body .dashboard_body_content .welcome_n_button .welcome h4 {\n  font-weight: 600;\n  font-size: 34px;\n  line-height: 41px;\n  color: #002058;\n}\n.dashboard_body .dashboard_body_content .welcome_n_button .buton button {\n  background-color: #f2994a;\n  border: 1px solid #f2f2f2;\n  border-radius: 4px;\n  color: #fff;\n  padding: 12px;\n  width: 176px;\n}\nbutton:focus {\n  outline: none;\n}\n.dashboard_body_content .cards {\n  width: 100%;\n  overflow: auto;\n  padding: 10px 0 25px 0;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.dashboard_body_content .cards > div {\n  width: 31.33%;\n  padding: 30px;\n\n  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);\n  border-radius: 5px;\n}\n.dashboard_body_content .cards > div .card_title,\n.dashboard_body_content .cards > div .amount_invested,\n.dashboard_body_content .cards > div .plans {\n  width: 100%;\n}\n.dashboard_body_content .cards > div .amount_invested {\n  padding: 20px 0;\n}\n.dashboard_body_content .cards .first_card {\n  background: #f9a825;\n}\n.dashboard_body_content .cards .second_card {\n  background: #0b638d;\n}\n.dashboard_body_content .cards .third_card {\n  background: #b2b7bc;\n}\n.dashboard_body_content .cards > div .card_title span {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 17px;\n  color: #ffffff;\n}\n.dashboard_body_content .cards > div .amount_invested span {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 29px;\n  color: #ffffff;\n}\n.dashboard_body_content .cards > div .plans span {\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  text-transform: capitalize;\n  color: #ffffff;\n}\n.dashboard_body_content .latest_investments {\n  width: 100%;\n  overflow: auto;\n}\n.dashboard_body_content .latest_investments .title {\n  width: 100%;\n  padding: 0 0 20px 0;\n\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 19px;\n  color: #002058;\n}\n.dashboard_body_content .latest_investments .investment_sections {\n  width: 100%;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.dashboard_body_content\n  .latest_investments\n  .investment_sections\n  > div:first-child {\n  width: 32%;\n}\n.dashboard_body_content\n  .latest_investments\n  .investment_sections\n  > div:nth-child(2) {\n  width: 62%;\n}\n/* Fix plan div */\n.fix_plan .product_container {\n  width: 100%;\n  /* margin: 20px 3%; */\n  /* height: 300px; */\n  overflow: auto;\n  /* border: 1px solid red; */\n  /* float: left; */\n  border-radius: 5px;\n  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);\n  background-color: #fff;\n}\n.fix_plan .product_container .invest_products_image {\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\n    url('shake.png');\n  /* padding: 0px 70px 30px 70px; */\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  /* height: calc(100vh - 77px); */\n  overflow: auto;\n}\n.invest_products_image {\n  width: 100%;\n  /* border: 1px solid green; */\n  height: 200px;\n  position: relative;\n}\n.product_container .invest_products_image .img_btn_link {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* height: 75px; */\n  /* border: 1px solid yellow; */\n  padding: 20px;\n  overflow: auto;\n}\n.product_container .invest_products_image .img_btn_link a {\n  color: rgba(255, 255, 255, 0.517);\n  padding: 5px 10px !important;\n  background-color: rgba(34, 34, 34, 0.8);\n  border-radius: 5px;\n  font-size: 12px;\n}\n.product_container .invest_products_image .img_desc {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  /* height: 75px; */\n  /* border: 1px solid yellow; */\n  padding: 20px;\n  overflow: auto;\n}\n.product_container .invest_products_image .img_desc p.invest_desc {\n  font-weight: normal;\n  font-size: 16px;\n  text-transform: capitalize;\n}\n.product_container .invest_products_image .img_desc p {\n  font-size: 10px;\n  color: rgb(202, 202, 202);\n}\n.interest_percentage {\n  width: 100%;\n  padding: 10px 0 10px 30px;\n  text-transform: uppercase;\n}\n.interest_percentage p:first-child {\n  font-size: 10px;\n  color: #b2b7bc;\n  margin-bottom: 0;\n}\n.interest_percentage p:nth-child(2) {\n  font-size: 14px;\n  color: #898d92;\n  padding: 6px 0 !important;\n  margin-bottom: 0;\n}\n.interest_percentage p:nth-child(2) span {\n  color: #08a65b;\n}\n.invest_amount {\n  padding: 10px 0 10px 30px;\n  width: 100%;\n}\n.fix_plan .product_container .invest_amount .title p:first-child {\n  text-transform: uppercase;\n  font-size: 10px;\n  color: #b2b7bc;\n  margin-bottom: 0;\n}\n.fix_plan .product_container .invest_amount .title p:nth-child(2) {\n  padding: 5px 0 !important;\n  margin-bottom: 0;\n}\n.fix_plan .product_container .invest_amount .title p:nth-child(2) span {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  text-transform: uppercase;\n  color: #222222;\n}\n.fix_plan\n  .product_container\n  .invest_amount\n  .title\n  p:nth-child(2)\n  span:nth-child(2) {\n  font-size: 12px;\n  color: #b2b7bc;\n  text-transform: uppercase;\n  padding-left: 25px !important;\n  padding-right: 25px !important;\n}\n.fix_plan .product_container .invest_amount .title p:nth-child(2) span {\n  font-size: 14px;\n}\n.product_container .invest_products_image .img_desc h4 {\n  text-transform: capitalize;\n  font-size: 16px;\n  color: #fff;\n  padding-bottom: 8px !important;\n}\n/* End of fix plan div */\n.inv_chart {\n  background-color: #fff;\n  border-radius: 5px;\n}\n.inv_chart .chart_title {\n  width: 100%;\n  text-align: right;\n}\n.inv_chart .chart_title p {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 19px;\n  color: #002058;\n}\n/* My Investment Page */\n.page_title_text {\n  width: 100%;\n  padding: 40px 0;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.page_title_text .text h4 {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 30px;\n  line-height: 36px;\n  color: #222222;\n}\n.page_title_text .button span {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 14px;\n  color: #014886;\n}\n.page_title_text .button span span {\n  font-size: 20px;\n}\n.packages {\n  width: 100%;\n  background-color: #fff;\n  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);\n  border-radius: 5px;\n  padding: 18px;\n  margin-bottom: 25px;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.packages div.packages_img {\n  width: 20%;\n  background: #e3e6ea;\n  border-radius: 5px;\n}\n.packages div.packages_desc {\n  width: 75%;\n  padding: 15px 0;\n}\n.packages div.packages_desc .top {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.packages div.packages_desc .top .title_text p {\n  padding: 0;\n  margin: 0;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  color: #002058;\n}\n.packages div.packages_desc .top .edit {\n  padding: 10px;\n  border: 0.5px solid #e3e6ea;\n  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n}\n.packages div.packages_desc .top .edit i:first-child {\n  color: #6fcf97;\n  border-right: 0.5px solid #e3e6ea;\n  padding: 0 15px;\n}\n.packages div.packages_desc .top .edit i:nth-child(2) {\n  color: #de292f;\n  padding: 0 15px;\n}\n.packages div.packages_desc .middle {\n  width: 40%;\n  display: block;\n  padding: 20px 0;\n}\n.packages div.packages_desc .middle p {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 144%;\n  color: rgba(0, 32, 88, 0.4);\n}\n.packages div.packages_desc .bottom {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.packages div.packages_desc .bottom .buttons {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n\n  width: 28%;\n}\n.packages div.packages_desc .bottom .buttons .topup {\n  border: 0.7px solid #ffd873;\n  background-color: #ffd873;\n  border-radius: 4px;\n  padding: 10px 38px;\n\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 14px;\n  color: #002058;\n}\n.packages div.packages_desc .bottom .buttons .redeem {\n  border: 0.7px solid #002058;\n  background-color: transparent;\n  border-radius: 4px;\n  padding: 10px 42px;\n\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 14px;\n  color: #002058;\n}\n.packages div.packages_desc .bottom .price h2 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 41px;\n  color: #6fcf97;\n}\n/* End of my investment page */\n/* New Investment Page */\n.investment_types {\n  width: 100%;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.investment_types > div {\n  width: 32.33%;\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  box-sizing: border-box;\n  border-radius: 5px;\n  padding: 30px;\n}\n.investment_types > div .top {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n}\n.investment_types > div .top p {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: capitalize;\n  color: #152144;\n}\n.investment_types > div .midu {\n  width: 100%;\n  padding: 40px 0;\n}\n.investment_types p {\n  padding: 0;\n  margin: 0;\n}\n.investment_types > div .midu p:first-child {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 12px;\n  text-transform: uppercase;\n  color: #b2b7bc;\n  padding-bottom: 10px;\n}\n.investment_types > div .midu p:nth-child(2) {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  text-transform: uppercase;\n  color: #222222;\n}\n.investment_types > div .midu p:nth-child(2) span {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 15px;\n  text-transform: uppercase;\n  color: #b2b7bc;\n  padding: 0 25px;\n}\n.investment_types > div .down {\n  width: 100%;\n}\n.investment_types > div .down p {\n  color: #6fcf97;\n}\n.investment_types > div .down p:first-child {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 12px;\n  text-transform: uppercase;\n  padding-bottom: 10px;\n}\n.investment_types > div .down p:nth-child(2) {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 17px;\n  text-transform: uppercase;\n}\n.log_title {\n  width: 100%;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 50px 0 8px 0;\n}\n.log_title div p {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 29px;\n  color: #002058;\n}\n.log_title div a {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 14px;\n  color: #152144;\n}\n.logs {\n  width: 100%;\n}\n.history_table_wrapper {\n  background-color: #ffffff;\n  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);\n  border-radius: 5px;\n  padding: 15px;\n}\n.history_table_wrapper .history_table .table thead th {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n.history_table_wrapper .history_table .table th {\n  border-top: none !important;\n}\n.history_table .table tbody tr td {\n  color: #898d92;\n}\n.history_table .table tbody tr td {\n  padding: 30px 0.75rem !important;\n  border-top: none !important;\n  border-bottom: 1px dashed #e3e6ea;\n}\n.status_icon_good i {\n  color: rgb(156, 243, 203);\n  font-size: 20px;\n  margin: 0 12px 0 0 !important;\n  transform: rotate(45deg);\n}\n.history_table .table tbody tr td:nth-child(2) {\n  color: #b0c5da;\n}\n.history_table .table tbody tr td {\n  padding: 30px 0.75rem !important;\n  border-top: none !important;\n  border-bottom: 1px dashed #e3e6ea;\n}\n.history_table .table tbody tr td:nth-child(3) {\n  font-weight: bold;\n}\n.status_icon_bad i {\n  color: rgb(245, 146, 146);\n  font-size: 20px;\n  margin: 0 12px 0 0 !important;\n  transform: rotate(45deg);\n}\n.history_table_wrapper .history_table .table thead th {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n.history_table_wrapper .history_table .table th {\n  border-top: none !important;\n}\n.history_table .table thead tr th {\n  padding: 18px 1rem !important;\n}\n.history_table .table th {\n  color: #b2b7bc;\n}\n/* End of new investment page */\n/* Investment Details page */\n.invest_detail_top {\n  width: 100%;\n  padding: 40px 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n\n  align-items: center;\n}\n.invest_detail_top .title h4 {\n  font-weight: 500;\n  font-size: 30px;\n  line-height: 36px;\n  color: #002058;\n}\n.invest_detail_top .invest_btn button {\n  border: none;\n  padding: 10px !important;\n  width: 145px;\n  transition: 0.4s;\n  border-radius: 4px !important;\n}\n.green_btn button {\n  background-color: rgb(255, 216, 115);\n  color: #002058;\n  transition: 0.4s;\n  border-radius: 4px;\n  font-weight: bold;\n}\n.invest_detail_desc {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n.invest_detail_desc div.left {\n  width: 30%;\n  border-radius: 5px;\n  background-color: #e3e6ea;\n}\n.invest_detail_desc div.right {\n  width: 70%;\n  padding: 0 0 0 40px;\n}\n.invest_detail_desc div.right .right_footer p {\n  padding: 0;\n  margin: 0;\n}\n.invest_detail_desc div.right .right_header {\n  width: 100%;\n}\n.invest_detail_desc div.right .right_header h4 {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 36px;\n  line-height: 43px;\n  text-transform: capitalize;\n  color: #152144;\n}\n.invest_detail_desc div.right .right_header p {\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 23px;\n  color: #898d92;\n  width: 70%;\n  padding: 7px 0 !important;\n}\n.invest_detail_desc div.right .right_footer {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n.invest_detail_desc div.right .right_footer div {\n  padding-right: 60px;\n}\n.invest_detail_desc div.right .right_footer div p:first-child {\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 14px;\n  text-transform: uppercase;\n  color: #b2b7bc;\n  /* padding-bottom: 0px !important; */\n}\n.invest_detail_desc div.right .right_footer div:first-child p:nth-child(2) {\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 19px;\n  text-transform: uppercase;\n  color: #898d92;\n}\n.invest_detail_desc div.right .right_footer div {\n  padding-right: 60px;\n}\n.invest_detail_desc div.right .right_footer div p:first-child {\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 14px;\n  text-transform: uppercase;\n  color: #b2b7bc;\n  /* padding-bottom: 10px !important; */\n}\n.invest_detail_desc div.right .right_footer div:last-child p:last-child {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 17px;\n  text-transform: uppercase;\n\n  color: #6fcf97;\n}\n.chart_section {\n  width: 100%;\n  padding: 100px 0;\n  overflow: auto;\n}\n.modal-body .inv_deatails {\n  width: 100%;\n  overflow: auto;\n  /* padding: 40px 50px; */\n}\n.modal-body .inv_deatails .upper_part {\n  width: 100%;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  padding: 40px 50px;\n}\n.modal-body .inv_deatails .upper_part .inv_details_desc {\n  padding-left: 30px;\n  width: 70%;\n}\n.modal-body .inv_deatails .upper_part .inv_details_desc .text {\n  width: 100%;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  line-height: 30px;\n  color: #152144;\n}\n.modal-body .inv_deatails .upper_part .inv_details_desc .brk_down {\n  width: 100%;\n\n  display: flex;\n  flex-direction: row;\n}\n.modal-body .inv_deatails .upper_part .inv_details_desc .brk_down .interest {\n  padding-right: 25px;\n  width: 35%;\n}\n.modal-body .inv_deatails .upper_part .inv_details_desc .brk_down > div > span {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 12px;\n  text-transform: uppercase;\n  color: #b2b7bc;\n}\n.modal-body .inv_deatails .upper_part .inv_details_desc .brk_down > div > p {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  text-transform: uppercase;\n  color: #002058;\n}\n.modal-body\n  .inv_deatails\n  .upper_part\n  .inv_details_desc\n  .brk_down\n  .invest_amountt\n  p\n  span {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 16px;\n  text-transform: uppercase;\n  color: #b2b7bc;\n  padding: 0 20px;\n}\n.inv_deatails .link_part {\n  width: 100%;\n  border-top: 1px solid rgba(178, 183, 188, 0.2);\n  border-bottom: 1px solid rgba(178, 183, 188, 0.2);\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n\n  padding: 20px 0;\n}\n.inv_deatails .link_part > div {\n  padding: 0 40px 0 40px;\n  cursor: pointer;\n}\n.inv_deatails .link_part > div span {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  color: #898d92;\n  transition: color 0.4s;\n\n  position: relative;\n}\n.inv_deatails .link_part > div:hover span {\n  color: #014886;\n  transition: 0.4s;\n}\n.inv_deatails .link_part > div.active span {\n  color: #014886;\n}\n.inv_deatails .link_part > div.active span:after {\n  content: \"\";\n  position: absolute;\n\n  width: 100%;\n  height: 1px;\n  background-color: #014886;\n  left: 0;\n  bottom: -22px;\n}\n/* .inv_deatails .link_part > div span:after {\n    background-color: transparent;\n} */\n.inv_deatails .link_part > div:hover span:after {\n  content: \"\";\n  position: absolute;\n\n  width: 100%;\n  height: 1px;\n  background-color: #014886;\n  left: 0;\n  bottom: -22px;\n}\n.inv_deatails .form_desc {\n  width: 100%;\n  text-align: center;\n  padding: 40px;\n\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  color: rgba(0, 32, 88, 0.8);\n}\n.inv_deatails .login_inputs {\n  width: 60%;\n  margin: 0 auto;\n  padding-bottom: 70px;\n}\n.bg_grey button {\n  background-color: #b2b7bc !important;\n  color: white !important;\n}\n.inv_deatails .payment {\n  width: 60%;\n  margin: 0 auto;\n  /* background-color: green; */\n  /* padding: 30px; */\n}\n#myinvest_payment {\n  display: none;\n}\n.inv_deatails .payment .card_options {\n  width: 100%;\n  padding: 15px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 20px;\n  margin: 10px 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.inv_deatails .payment .card_options .card_icon {\n  float: left;\n  padding-right: 20px;\n}\n.inv_deatails .payment .card_options .card_name {\n  float: left;\n}\n.inv_deatails .payment .card_options .card_name h6 {\n  font-size: 14px;\n  color: #182538;\n}\n.inv_deatails .payment .card_options .card_name p {\n  font-size: 10px;\n  color: #182538;\n  margin: 0;\n}\n.inv_deatails .payment .card_options .icon_one i {\n  color: #10c06d;\n  font-size: 23px !important;\n}\n/* End of investment details page */\n/* Portfolio page */\n.transaction_history_title {\n  padding: 30px 30px 30px 30px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.transaction_history_forHistory .transaction_history_title h5 {\n  font-weight: 300;\n  font-size: 24px;\n}\n.transaction_history_title h5 {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 29px;\n  color: #002058;\n}\n.transaction_history_title p {\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 16px;\n  color: #014886;\n}\n.table_pagination {\n  width: 100%;\n  padding: 20px 0;\n}\n.pagination .page-item .page-link:first-child i,\n.pagination .page-item .page-link:last-child i {\n  margin: 0 10px !important;\n  transition: 0.3s;\n}\n.pagination .page-item .page-link {\n  padding: 11px !important;\n  border-radius: 50% !important;\n  border: none !important;\n  transition: 0.2s;\n  font-weight: bold;\n  font-size: 14px;\n  color: #898d92;\n  margin: 0 6px !important;\n}\n/* End of portfolio page */\n.investors {\n  width: 100%;\n  padding: 10px 0 60px 30px;\n}\n.investors p:first-child {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 10px;\n  line-height: 12px;\n  text-transform: uppercase;\n  color: #b2b7bc;\n  padding-bottom: 10px;\n  margin: 0;\n}\n.investors p:nth-child(2) {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 14px;\n  text-transform: uppercase;\n  color: #b2b7bc;\n}\n/* My Account page */\n.account_title_text {\n  width: 100%;\n  padding: 20px 0 60px 0;\n}\n.account_title_text h5 {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 34px;\n  line-height: 41px;\n  color: #002058;\n}\n.myAccount_settings {\n  width: 100%;\n  overflow: auto;\n  padding: 10px 0 30px 0;\n}\n.myAccount_settings .links {\n  width: 100%;\n  padding: 0 0 10px 0;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.myAccount_settings .links > div {\n  padding: 5px 40px 30px 40px;\n  cursor: pointer;\n}\n.myAccount_settings .links > div span {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  color: #898d92;\n  transition: color 0.4s;\n\n  position: relative;\n}\n.myAccount_settings .links > div:hover span {\n  color: #014886;\n  transition: 0.4s;\n}\n.myAccount_settings .links > div.active span {\n  color: #014886;\n}\n.myAccount_settings .links > div.active span:after {\n  content: \"\";\n  position: absolute;\n\n  width: 100%;\n  height: 1px;\n  background-color: #014886;\n  left: 0;\n  bottom: -60%;\n}\n/* .myAccount_settings .links > div span:after {\n    background-color: transparent;\n} */\n.myAccount_settings .links > div:hover span:after {\n  content: \"\";\n  position: absolute;\n\n  width: 100%;\n  height: 1px;\n  background-color: #014886;\n  left: 0;\n  bottom: -60%;\n}\n.myAccount_settings .settings_info {\n  width: 100%;\n  background: #ffffff;\n  border-radius: 5px;\n  padding: 30px 100px 40px 100px;\n  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.015);\n}\n.myAccount_settings .settings_info > .header {\n  width: 100%;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  color: rgb(0, 32, 88, 0.8);\n  text-align: center;\n  padding: 30px 0 30px 0;\n}\n.settings_info .settings_input {\n  width: 100%;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.settings_info .settings_input .prof_pics {\n  width: 30%;\n  padding-top: 20px;\n}\n.settings_info .settings_input .prof_form {\n  width: 50%;\n}\n.settings_info .settings_input .prof_pics .header {\n  width: 100%;\n  text-align: center;\n  padding-bottom: 10px;\n\n  font-weight: bold;\n  font-size: 14px;\n  color: #898d92;\n}\n.settings_info .settings_input .prof_pics .prof_image {\n  width: 170px;\n  height: 170px;\n  border-radius: 50%;\n  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.015);\n  margin: 0 auto;\n  background-color: #e3e6ea;\n}\n.settings_info .settings_input .prof_pics .edit {\n  width: 100%;\n  padding: 25px 0;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.settings_info .settings_input .prof_pics .edit > div {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.settings_info .settings_input .prof_pics .edit div:first-child i {\n  padding-right: 15px;\n}\n.settings_info .settings_input .prof_pics .edit div:first-child {\n  border-right: 0.5px solid #e3e6ea;\n  padding-right: 15px;\n\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 16px;\n}\n.settings_info .settings_input .prof_pics .edit div:first-child a {\n  color: #014886;\n}\n.settings_info .settings_input .prof_pics .edit div:nth-child(2) i {\n  padding-right: 15px;\n}\n.settings_info .settings_input .prof_pics .edit div:nth-child(2) {\n  padding-left: 15px;\n\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 16px;\n}\n.settings_info .settings_input .prof_pics .edit div:nth-child(2) a {\n  color: #de292f;\n}\n.extra_space {\n  width: 100%;\n  padding: 30px 120px 150px 120px;\n  overflow: auto;\n}\n.password_update {\n  width: 50%;\n  margin: 0 auto;\n}\n.bg_blue button {\n  background-color: #014886 !important;\n  color: #fff !important;\n}\n#myaccount_update_password {\n  display: none;\n}\n/* End of my account page */\n/* Modal */\n.modal_wrapper {\n  padding: 10px 30px 30px 30px;\n}\n.modal-header {\n  border-bottom: none !important;\n}\n#meep_settings .modal-header {\n  background-color: transparent !important;\n}\n#meep_settings .modal-content {\n  background-color: transparent !important;\n  border: none !important;\n}\n#meep_settings .modal-body {\n  background-color: #fff !important;\n  /* padding: 30px !important; */\n}\n.modal-header .close {\n  color: #fff !important;\n  font-size: 14px !important;\n  font-weight: 100 !important;\n}\n/* End of modal */\n/* End of dashboard */\n/* Responsivenss */\n/* div.first div.inner div:first-child {\n    display: none;\n} */\n/* End of Responsiveness */\n/* my custom buttons */\nbutton:hover {\n  cursor: pointer;\n}\ndiv.forButton button {\n  padding: 11px 75px;\n  background-color: #ffd873;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n}\n.text-danger {\n  color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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O0VBQzFCLDJCQUEyQjtBQUM3QjtBQUVBLGlCQUFpQjtBQUVqQixxQkFBcUI7QUFFckIsa0JBQWtCO0FBRWxCOztHQUVHO0FBRUgsMEJBQTBCO0FBRTFCLHNCQUFzQjtBQUN0QjtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsMENBQTBDO0VBQzFDLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnZW5lcmFsICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GaXJhK1NhbnMmZGlzcGxheT1zd2FwXCIpO1xuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSxcbmh0bWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpICFpbXBvcnRhbnQ7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjE0NDU3O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0sXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSxcbmlucHV0W3R5cGU9XCJkYXRlXCJdLFxuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDcsIDIxNiwgMjM0LCAwLjMpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmQ4ZWEgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDE4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uaW5wdXRfZGl2IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaW5wdXRfZGl2IC5mb3JtTGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBjb2xvcjogcmdiYSg0LCAyNSwgNjYsIDAuMyk7XG59XG5cbmlucHV0OmZvY3VzLFxuc2VsZWN0OmZvY3VzLFxudGV4dGFyZWEge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dF9kaXYgLmJlbG93X2lucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5pbnB1dF9kaXYgLmJlbG93X2lucHV0IC5sZWZ0IHAge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uaW5wdXRfZGl2IC5iZWxvd19pbnB1dCAubGVmdCBwIHNwYW4ge1xuICBjb2xvcjogIzAwMjA1ODtcbn1cblxuLmlucHV0X2RpdiAuYmVsb3dfaW5wdXQgLnJpZ2h0IHAge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uaW5wdXRfZGl2IC5iZWxvd19pbnB1dCAucmlnaHQgcCBzcGFuIHtcbiAgY29sb3I6ICNmOWE4MjU7XG59XG5cbi5idG5fZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG5cbi5idG5fZnVsbCBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAwO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4NzM7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogIzA0MTk0MjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmhhbGZfaW5wdXRfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcblxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5oYWxmX2lucHV0X2RpdiAuY29sXzYge1xuICB3aWR0aDogNDglO1xufVxuXG4vKiBFbmQgb2YgZ2VuZXJhbCAqL1xuXG4vKiBmaXJzdCBzZWN0aW9uICovXG5kaXYuZmlyc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8qIGhlaWdodDogOTAwcHg7ICovXG4gIHBhZGRpbmc6IDEwMHB4IDI1MHB4IDIzMHB4IDI1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL2hlYWRlckltZy5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcbiAgLyogYmFja2dyb3VuZC1zaXplOiA5ODNweCA5NzBweDsgKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuZGl2LmlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuZGl2LmlubmVyIGRpdi5sZWZ0LFxuZGl2LmlubmVyIGRpdi5yaWdodCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi8qIGRpdi5pbm5lciBkaXYgZGl2LmxlZnQge1xuXG59XG5cbmRpdi5pbm5lciBkaXYgZGl2LnJpZ2h0IHtcblxufSAqL1xuXG5kaXYuaW5uZXIgZGl2LmxlZnQgLmxvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbmRpdi5pbm5lciBkaXYubGVmdCAuaGVhZGVyX3RpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA4NXB4O1xufVxuXG5kaXYuaW5uZXIgZGl2LmxlZnQgLmhlYWRlcl90aXRsZSBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBjb2xvcjogIzAwMjA1ODtcbn1cblxuZGl2LmlubmVyIGRpdi5sZWZ0IC5oZWFkZXJfdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzMHB4IDA7XG59XG5cbmRpdi5pbm5lciBkaXYubGVmdCAuaGVhZGVyX3RleHQgcCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHJnYmEoMCwgMzIsIDg4LCAwLjYpO1xufVxuXG5kaXYuaW5uZXIgZGl2LmxlZnQgLmhlYWRlcl9idG4ge1xuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG5kaXYuaW5uZXIgZGl2LmxlZnQgLmhlYWRlcl9idG4gYS5zdGFydCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4NzM7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiA4cHggMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzA0MTk0MjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5kaXYuaW5uZXIgZGl2LmxlZnQgLmhlYWRlcl9idG4gYS5sZWFybiB7XG4gIHBhZGRpbmc6IDhweCAyNXB4O1xuICBjb2xvcjogIzA0MTk0MjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAwLjdweCBzb2xpZCAjMDAyMDU4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuZGl2LmlubmVyIGRpdi5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbmRpdi5pbm5lciBkaXYucmlnaHQgZGl2OmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5kaXYuaW5uZXIgZGl2LnJpZ2h0IGJ1dHRvbi5sb2dpbiB7XG4gIHBhZGRpbmc6IDlweCAyNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmRpdi5pbm5lciBkaXYucmlnaHQgYnV0dG9uLnNpZ251cCB7XG4gIHBhZGRpbmc6IDlweCAyNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4NzM7XG4gIGNvbG9yOiAjMDQxOTQyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4vKiBFbmQgb2YgZmlyc3Qgc2VjdGlvbiAqL1xuXG4vKiBTZWNvbmQgc2VjdGlvbiAqL1xuXG5kaXYuc2Vjb25kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwMHB4IDAgMCAwO1xufVxuXG4uc2Vjb25kX3RpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XG59XG5cbi5zZWNvbmRfdGl0bGUgaDQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBjb2xvcjogcmdiYSgwLCAzMiwgODgsIDAuOCk7XG59XG5cbi5zZWNvbmRfY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uc2Vjb25kX2NvbnRhaW5lciAuc2VydmljZXMge1xuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uc2Vjb25kX2NvbnRhaW5lciAuc2VydmljZXMgLmVhY2hfc2VydmljZSB7XG4gIHdpZHRoOiAzMy4zMyU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlY29uZF9jb250YWluZXIgLnNlcnZpY2VzIC5lYWNoX3NlcnZpY2UgLnNlcnZpY2VfaWNvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLnNlY29uZF9jb250YWluZXIgLnNlcnZpY2VzIC5lYWNoX3NlcnZpY2UgLnNlcnZpY2VfaWNvbiBkaXYge1xuICB3aWR0aDogMjElO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTBweCAxN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVhY2hfc2VydmljZSAuc2VydmljZV90aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lYWNoX3NlcnZpY2UgLnNlcnZpY2VfdGl0bGUgaDQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6IHJnYmEoMCwgMzIsIDg4LCAwLjcpO1xufVxuXG4uZWFjaF9zZXJ2aWNlIC5zZXJ2aWNlX3RleHQge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTAwcHg7XG59XG5cbi5lYWNoX3NlcnZpY2UgLnNlcnZpY2VfdGV4dCBwIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgY29sb3I6ICNiM2IzYjM7XG59XG5cbi8qIEVuZCBvZiBzZWNvbmQgc2VjdGlvbiAqL1xuXG4vKiBUaGlyZCBzZWN0aW9uICovXG5cbmRpdi50aGlyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgLyogaGVpZ2h0OiAyOTAwcHg7ICovXG4gIHBhZGRpbmc6IDQxMHB4IDEwMHB4IDI3MHB4IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL25ldy5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xuICAvKiBiYWNrZ3JvdW5kLXNpemU6IDk4M3B4IDk3MHB4OyAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5kaXYudGhpcmQgLnRoaXJkX3VwIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRoaXJkX3VwIC51cF9sZWZ0IHtcbn1cblxuLmhpZGVfaW1nIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRoaXJkX3VwIC51cF9yaWdodCB7XG4gIHdpZHRoOiAzNSU7XG59XG5cbi50aGlyZF91cCAudXBfcmlnaHQgaDQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGhpcmRfdXAgLnVwX3JpZ2h0IHAge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nLXRvcDogMjVweDtcbn1cblxuLyogRW5kIG9mIHRoaXJkIHNlY3Rpb24gKi9cblxuLyogRm91cnRoIFNlY3Rpb24gKi9cblxuZGl2LmZvdXJ0aCB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pY29ucy9xdW90ZS5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMHB4IDMwcHg7XG4gIC8qIGJhY2tncm91bmQtc2l6ZTogOTgzcHggOTcwcHg7ICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbmRpdi5mb3VydGggZGl2LnNlY29uZF9jb250YWluZXIgaDQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGNvbG9yOiAjMjczNDQ0O1xufVxuXG5kaXYuZm91cnRoIC5jb21tZW50cyB7XG4gIHBhZGRpbmc6IDEwMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG5kaXYuZm91cnRoIC5jb21tZW50czo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY29tbWVudHMgLmVhY2hfY29tbWVudHNfZGl2IC5lYWNoX2NvbW1lbnRzIHtcbiAgcGFkZGluZzogMzBweDtcbiAgYm94LXNoYWRvdzogMCAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjRzO1xufVxuXG4uY29tbWVudHMgLmVhY2hfY29tbWVudHNfZGl2IC5lYWNoX2NvbW1lbnRzOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuXG4uY29tbWVudHMgLmVhY2hfY29tbWVudHNfZGl2IC5lYWNoX2NvbW1lbnRzIC5uYW1lX3JvbGUge1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cblxuLmNvbW1lbnRzIC5lYWNoX2NvbW1lbnRzX2RpdiAuZWFjaF9jb21tZW50cyAubmFtZV9yb2xlIHAge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICMwMDIwNTg7XG59XG5cbi5jb21tZW50cyAuZWFjaF9jb21tZW50c19kaXYgLmVhY2hfY29tbWVudHMgLm5hbWVfcm9sZSBzcGFuIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzAwMjA1ODtcbn1cblxuLmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMTQ0O1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG5cbi5mb290ZXIgLmZ1dGFfaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb290ZXIgLmZ1dGFfaGVhZGVyIC50ZXh0XzEge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5mb290ZXIgLmZ1dGFfaGVhZGVyIC50ZXh0XzEgaDUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogNTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5mb290ZXIgLmZ1dGFfaGVhZGVyIC50ZXh0XzIgcCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi5mb290ZXIgLmZvb3Rlcl9pY29uX3dpZGdldCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb290ZXIgLmZvb3Rlcl9pY29uX3dpZGdldCBkaXYge1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLmZvb3RlciAuZm9vdGVyX2ljb25fd2lkZ2V0IGRpdiAuZG93bmxvYWRfaW5zdCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nLXRvcDogMTdweDtcbn1cblxuLmZvb3RlciAuZm9vdGVyX2ljb25fd2lkZ2V0IGRpdiAuZG93bmxvYWRfaW5zdCBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5mb290ZXIgLmZvb3Rlcl9pY29uX3dpZGdldCAuaWNvbl9pbWcge1xuICB3aWR0aDogNjZweDtcbiAgaGVpZ2h0OiA2NnB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgY2xlYXI6IGJvdGg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb290ZXIgLmZvb3Rlcl9pY29uX3dpZGdldCAuaWNvbl9pbWcgaW1nIHtcbn1cblxuLmZvb3RlciAuZm9vdGVyX2ljb25fd2lkZ2V0IC5kb3dubG9hZF9pbnN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvb3RlciAuZm9vdGVyX2ljb25fd2lkZ2V0IC5mdF8yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cblxuLmZvb3RlciAuZm9vdGVyX2ljb25fd2lkZ2V0IC5mdF80IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YTgyNTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMzVweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5mb290ZXIgLmxhc3RfZnV0YV9zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5mb290ZXIgLmxhc3RfZnV0YV9zZWN0aW9uIGRpdiB7XG4gIHBhZGRpbmc6IDEwcHggMjVweCAxMHB4IDA7XG59XG5cbi5mb290ZXIgLmxhc3RfZnV0YV9zZWN0aW9uIGRpdiBhIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NTgpO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uZm9vdGVyIC5sYXN0X2Z1dGFfc2VjdGlvbiBkaXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKiBFbmQgb2YgZm91cnRoIFNlY3Rpb24gKi9cblxuLyogTG9naW4gUGFnZSAqL1xuXG4ubG9naW5fbGVmdF9zZWN0aW9uIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogNjBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYigwLCAzMiwgODgsIDAuOCksIHJnYigwLCAzMiwgODgsIDAuOCkpLFxuICAgIHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvcGVvcGxlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZmxvYXQ6IGxlZnQ7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5jb21wYW55X2xvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuXG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ2luX2xlZnRfc2VjdGlvbiAuY29tcGFueV9sb2dvIGgzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ3cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubG9naW5fbGVmdF9zZWN0aW9uIC5jb21wYW55X2xvZ28gc3BhbiB7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbi53ZWxjb21lX25vdGUge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ud2VsY29tZV9ub3RlIGgxIHtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbi53ZWxjb21lX25vdGUgcDpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG5cbi53ZWxjb21lX25vdGUgcDpudGgtY2hpbGQoMikge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICB3b3JkLXNwYWNpbmc6IDJweCAhaW1wb3J0YW50O1xufVxuXG4ucGF0bmVyc19sb2dpbl9wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuXG4gIHBhZGRpbmc6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9naW5fcmlnaHRfc2VjdGlvbiB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MCUpO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuXG4ubG9naW5fbWluaV9uYXZfdHdvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICBwYWRkaW5nOiA2MHB4O1xufVxuXG4ubG9naW5fbWluaV9uYXZfdHdvIHAge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogIzAwMjA1ODtcbn1cblxuLmxvZ2luX21pbmlfbmF2X3R3byBwIGkge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5sb2dpbl9taW5pX25hdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gIHBhZGRpbmc6IDYwcHg7XG59XG5cbi5sb2dpbl9taW5pX25hdiBwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgY29sb3I6IHJnYmEoMCwgMzIsIDg4LCAwLjUpO1xufVxuXG4uYnRuX2dldFN0YXJ0ZWQge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDExcHggMjdweDtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAyMHB4IHJnYmEoMjQsIDM3LCA1NiwgMC4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzLCB0cmFuc2Zvcm0gMC4ycztcblxuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAyMDU4O1xufVxuXG4uYnRuX2dldFN0YXJ0ZWQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCByZ2JhKDI0LCAzNywgNTYsIDAuMSk7XG59XG5cbi5idG5fZ2V0U3RhcnRlZDphY3RpdmUge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xufVxuXG4ubG9naW5fbWluaV9uYXYgZGl2IHtcbiAgbWFyZ2luLWxlZnQ6IDEuNSU7XG4gIG1hcmdpbi1yaWdodDogMS41JTtcbn1cblxuLmxvZ2luX2Zvcm1fZGl2IHtcbiAgd2lkdGg6IDUwJTtcbiAgLyogbWFyZ2luOiA0MHB4IDEwJTsgKi9cbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLyogYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjE1KTsgKi9cbiAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xuICAvKiBwYWRkaW5nOiA2MHB4OyAqL1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmNlbnRlcl9mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9ybV90aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiAuZm9ybV90aXRsZSBoMSB7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ5cHg7XG59ICovXG5cbi5mb3JtX3RpdGxlIHAge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDMyLCA4OCwgMC40KTtcbn1cblxuLmJ0bl9iZWxvd19saW5rIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLmxldGFfc3BhY2Uge1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxuXG4uYnRuX2JlbG93X2xpbmsgYSB7XG4gIGNvbG9yOiAjMDAyMDU4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5idG5fYmVsb3dfbGluayBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uYnRuX2JlbG93X2xpbmsgZGl2LmZvckJ1dHRvbiBhIHtcbiAgcGFkZGluZzogMTFweCA3NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkODczO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmNyZWF0ZV9hY2NfdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICBjb2xvcjogIzAwMjA1ODtcbn1cblxuLnByZXZfY29sb3IgYSB7XG4gIGNvbG9yOiAjZjlhODI1O1xufVxuXG4vKiBFbmQgb2YgbG9naW4gUGFnZSAqL1xuXG4vKiBBQ0NUIFN1Y2Nlc3MgcGFnZSAqL1xuXG4uY2VudGVyX2Zvcm1fc3VjY2VzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTJweCk7XG5cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cbn1cblxuLmFjY19zdWNjZXNzX2RpdiB7XG4gIHdpZHRoOiA3MCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDgwJTtcbn1cblxuLmFjY19zdWNjZXNzX2RpdiAuY2hlY2tfaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jZW50ZXJfZm9ybV9zdWNjZXNzIC5zdWNjZXNzX3RleHRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweCAwIDQwcHggMDtcbn1cblxuLmNlbnRlcl9mb3JtX3N1Y2Nlc3MgLnN1Y2Nlc3NfdGV4dHMgaDQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDQxcHg7XG4gIGNvbG9yOiAjMDAyMDU4O1xufVxuXG4uY2VudGVyX2Zvcm1fc3VjY2VzcyAuc3VjY2Vzc190ZXh0cyBwIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNDUuOCU7XG4gIGNvbG9yOiByZ2IoMjEsIDIxLCAyMSwgMC41KTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5idG5fY29udGludWUge1xuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ0bl9jb250aW51ZSBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4NzM7XG4gIGNvbG9yOiAjMDQxOTQyO1xuICBwYWRkaW5nOiAxMnB4IDEwMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcblxuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uYnRuX2NvbnRpbnVlIGJ1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubm90aWZpY2F0aW9uX2dyZWVuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDI4cHggMTlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmY2Y5NztcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4ubm90aWZpY2F0aW9uX2dyZWVuIHAge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubm90aWZpY2F0aW9uX2dyZWVuIHAgaSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4vKiBFbmQgb2YgQUNDVCBTdWNjZXNzIHBhZ2UgKi9cblxuLyogRGFzaGJvYXJkICovXG5cbi8qIFNpZGUgTmF2ICovXG5cbi5zaWRlX25hdiB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMTQ0O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnNpZGVfbmF2IC5zaXRlX2xvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5zaWRlX25hdiAuc2lkZV9saW5rcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnNpZGVfbmF2IC5zaWRlX2xpbmtzIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5zaWRlX25hdiAuc2lkZV9saW5rcyB1bCBsaSB7XG59XG5cbi5zaWRlX25hdiAuc2lkZV9saW5rcyB1bCBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbWFyZ2luOiA1cHggMDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MjIpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnNpZGVfbmF2IC5zaWRlX2xpbmtzIHVsIGxpIGEgaSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc2lkZV9uYXYgLnNpZGVfbGlua3MgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zaWRlX25hdiAuc2lkZU5hdl9mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICBwYWRkaW5nOiAxNTBweCAwIDVweCAwO1xufVxuXG4uc2lkZV9uYXYgLnNpZGVOYXZfZm9vdGVyIHAge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi8qIEVuZCBvZiBzaWRlIE5hdiAqL1xuXG4vKiBEYXNib2FyZCBCb2R5ICovXG5cbi5kYXNoYm9hcmRfYm9keSB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZGFzaGJvYXJkX2JvZHkgLmRhc2JvYXJkX25hdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE3OCwgMTgzLCAxODgsIDAuMik7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGFzaGJvYXJkX2JvZHkgLmRhc2JvYXJkX25hdiAubm90aWZpY2F0aW9uIHtcbiAgcGFkZGluZzogMTBweCA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YTgyNTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgd2lkdGg6IDMzJTtcbn1cblxuLmRhc2hib2FyZF9ib2R5IC5kYXNib2FyZF9uYXYgLm5vdGlmaWNhdGlvbiBwIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZGFzYm9hcmRfbmF2IC51c2VyX3NldHQge1xuICAvKiB3aWR0aDogMTAlOyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kYXNib2FyZF9uYXYgLnVzZXJfc2V0dCAudXNlcl9pbWFnZSB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmRhc2JvYXJkX25hdiAudXNlcl9zZXR0IC51c2VyX25hbWUgcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmRhc2hib2FyZF9ib2R5IC5kYXNoYm9hcmRfYm9keV9jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHggNDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5kYXNoYm9hcmRfYm9keSAuZGFzaGJvYXJkX2JvZHlfY29udGVudCAud2VsY29tZV9uX2J1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1MHB4IDA7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGFzaGJvYXJkX2JvZHkgLmRhc2hib2FyZF9ib2R5X2NvbnRlbnQgLndlbGNvbWVfbl9idXR0b24gLndlbGNvbWUgaDQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDM0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MXB4O1xuICBjb2xvcjogIzAwMjA1ODtcbn1cblxuLmRhc2hib2FyZF9ib2R5IC5kYXNoYm9hcmRfYm9keV9jb250ZW50IC53ZWxjb21lX25fYnV0dG9uIC5idXRvbiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI5OTRhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMnB4O1xuICB3aWR0aDogMTc2cHg7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5kYXNoYm9hcmRfYm9keV9jb250ZW50IC5jYXJkcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMTBweCAwIDI1cHggMDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5kYXNoYm9hcmRfYm9keV9jb250ZW50IC5jYXJkcyA+IGRpdiB7XG4gIHdpZHRoOiAzMS4zMyU7XG4gIHBhZGRpbmc6IDMwcHg7XG5cbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZGFzaGJvYXJkX2JvZHlfY29udGVudCAuY2FyZHMgPiBkaXYgLmNhcmRfdGl0bGUsXG4uZGFzaGJvYXJkX2JvZHlfY29udGVudCAuY2FyZHMgPiBkaXYgLmFtb3VudF9pbnZlc3RlZCxcbi5kYXNoYm9hcmRfYm9keV9jb250ZW50IC5jYXJkcyA+IGRpdiAucGxhbnMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRhc2hib2FyZF9ib2R5X2NvbnRlbnQgLmNhcmRzID4gZGl2IC5hbW91bnRfaW52ZXN0ZWQge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbi5kYXNoYm9hcmRfYm9keV9jb250ZW50IC5jYXJkcyAuZmlyc3RfY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmOWE4MjU7XG59XG5cbi5kYXNoYm9hcmRfYm9keV9jb250ZW50IC5jYXJkcyAuc2Vjb25kX2NhcmQge1xuICBiYWNrZ3JvdW5kOiAjMGI2MzhkO1xufVxuXG4uZGFzaGJvYXJkX2JvZHlfY29udGVudCAuY2FyZHMgLnRoaXJkX2NhcmQge1xuICBiYWNrZ3JvdW5kOiAjYjJiN2JjO1xufVxuXG4uZGFzaGJvYXJkX2JvZHlfY29udGVudCAuY2FyZHMgPiBkaXYgLmNhcmRfdGl0bGUgc3BhbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZGFzaGJvYXJkX2JvZHlfY29udGVudCAuY2FyZHMgPiBkaXYgLmFtb3VudF9pbnZlc3RlZCBzcGFuIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmRhc2hib2FyZF9ib2R5X2NvbnRlbnQgLmNhcmRzID4gZGl2IC5wbGFucyBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZGFzaGJvYXJkX2JvZHlfY29udGVudCAubGF0ZXN0X2ludmVzdG1lbnRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZGFzaGJvYXJkX2JvZHlfY29udGVudCAubGF0ZXN0X2ludmVzdG1lbnRzIC50aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDAgMjBweCAwO1xuXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGNvbG9yOiAjMDAyMDU4O1xufVxuXG4uZGFzaGJvYXJkX2JvZHlfY29udGVudCAubGF0ZXN0X2ludmVzdG1lbnRzIC5pbnZlc3RtZW50X3NlY3Rpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZGFzaGJvYXJkX2JvZHlfY29udGVudFxuICAubGF0ZXN0X2ludmVzdG1lbnRzXG4gIC5pbnZlc3RtZW50X3NlY3Rpb25zXG4gID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDMyJTtcbn1cblxuLmRhc2hib2FyZF9ib2R5X2NvbnRlbnRcbiAgLmxhdGVzdF9pbnZlc3RtZW50c1xuICAuaW52ZXN0bWVudF9zZWN0aW9uc1xuICA+IGRpdjpudGgtY2hpbGQoMikge1xuICB3aWR0aDogNjIlO1xufVxuXG4vKiBGaXggcGxhbiBkaXYgKi9cblxuLmZpeF9wbGFuIC5wcm9kdWN0X2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBtYXJnaW46IDIwcHggMyU7ICovXG4gIC8qIGhlaWdodDogMzAwcHg7ICovXG4gIG92ZXJmbG93OiBhdXRvO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG4gIC8qIGZsb2F0OiBsZWZ0OyAqL1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5maXhfcGxhbiAucHJvZHVjdF9jb250YWluZXIgLmludmVzdF9wcm9kdWN0c19pbWFnZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNCksIHJnYmEoMCwgMCwgMCwgMC40KSksXG4gICAgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc2hha2UucG5nKTtcbiAgLyogcGFkZGluZzogMHB4IDcwcHggMzBweCA3MHB4OyAqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAvKiBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3N3B4KTsgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5pbnZlc3RfcHJvZHVjdHNfaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXG4gIGhlaWdodDogMjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb2R1Y3RfY29udGFpbmVyIC5pbnZlc3RfcHJvZHVjdHNfaW1hZ2UgLmltZ19idG5fbGluayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgLyogaGVpZ2h0OiA3NXB4OyAqL1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7ICovXG4gIHBhZGRpbmc6IDIwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucHJvZHVjdF9jb250YWluZXIgLmludmVzdF9wcm9kdWN0c19pbWFnZSAuaW1nX2J0bl9saW5rIGEge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUxNyk7XG4gIHBhZGRpbmc6IDVweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgMC44KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wcm9kdWN0X2NvbnRhaW5lciAuaW52ZXN0X3Byb2R1Y3RzX2ltYWdlIC5pbWdfZGVzYyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgLyogaGVpZ2h0OiA3NXB4OyAqL1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7ICovXG4gIHBhZGRpbmc6IDIwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucHJvZHVjdF9jb250YWluZXIgLmludmVzdF9wcm9kdWN0c19pbWFnZSAuaW1nX2Rlc2MgcC5pbnZlc3RfZGVzYyB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5wcm9kdWN0X2NvbnRhaW5lciAuaW52ZXN0X3Byb2R1Y3RzX2ltYWdlIC5pbWdfZGVzYyBwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogcmdiKDIwMiwgMjAyLCAyMDIpO1xufVxuXG4uaW50ZXJlc3RfcGVyY2VudGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAzMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaW50ZXJlc3RfcGVyY2VudGFnZSBwOmZpcnN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2IyYjdiYztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmludGVyZXN0X3BlcmNlbnRhZ2UgcDpudGgtY2hpbGQoMikge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjODk4ZDkyO1xuICBwYWRkaW5nOiA2cHggMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uaW50ZXJlc3RfcGVyY2VudGFnZSBwOm50aC1jaGlsZCgyKSBzcGFuIHtcbiAgY29sb3I6ICMwOGE2NWI7XG59XG5cbi5pbnZlc3RfYW1vdW50IHtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMzBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5maXhfcGxhbiAucHJvZHVjdF9jb250YWluZXIgLmludmVzdF9hbW91bnQgLnRpdGxlIHA6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjYjJiN2JjO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uZml4X3BsYW4gLnByb2R1Y3RfY29udGFpbmVyIC5pbnZlc3RfYW1vdW50IC50aXRsZSBwOm50aC1jaGlsZCgyKSB7XG4gIHBhZGRpbmc6IDVweCAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5maXhfcGxhbiAucHJvZHVjdF9jb250YWluZXIgLmludmVzdF9hbW91bnQgLnRpdGxlIHA6bnRoLWNoaWxkKDIpIHNwYW4ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4uZml4X3BsYW5cbiAgLnByb2R1Y3RfY29udGFpbmVyXG4gIC5pbnZlc3RfYW1vdW50XG4gIC50aXRsZVxuICBwOm50aC1jaGlsZCgyKVxuICBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNiMmI3YmM7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmctbGVmdDogMjVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5maXhfcGxhbiAucHJvZHVjdF9jb250YWluZXIgLmludmVzdF9hbW91bnQgLnRpdGxlIHA6bnRoLWNoaWxkKDIpIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wcm9kdWN0X2NvbnRhaW5lciAuaW52ZXN0X3Byb2R1Y3RzX2ltYWdlIC5pbWdfZGVzYyBoNCB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIEVuZCBvZiBmaXggcGxhbiBkaXYgKi9cblxuLmludl9jaGFydCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmludl9jaGFydCAuY2hhcnRfdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5pbnZfY2hhcnQgLmNoYXJ0X3RpdGxlIHAge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogIzAwMjA1ODtcbn1cblxuLyogTXkgSW52ZXN0bWVudCBQYWdlICovXG5cbi5wYWdlX3RpdGxlX3RleHQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNDBweCAwO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBhZ2VfdGl0bGVfdGV4dCAudGV4dCBoNCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbi5wYWdlX3RpdGxlX3RleHQgLmJ1dHRvbiBzcGFuIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgY29sb3I6ICMwMTQ4ODY7XG59XG5cbi5wYWdlX3RpdGxlX3RleHQgLmJ1dHRvbiBzcGFuIHNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5wYWNrYWdlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucGFja2FnZXMgZGl2LnBhY2thZ2VzX2ltZyB7XG4gIHdpZHRoOiAyMCU7XG4gIGJhY2tncm91bmQ6ICNlM2U2ZWE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnBhY2thZ2VzIGRpdi5wYWNrYWdlc19kZXNjIHtcbiAgd2lkdGg6IDc1JTtcbiAgcGFkZGluZzogMTVweCAwO1xufVxuXG4ucGFja2FnZXMgZGl2LnBhY2thZ2VzX2Rlc2MgLnRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBhY2thZ2VzIGRpdi5wYWNrYWdlc19kZXNjIC50b3AgLnRpdGxlX3RleHQgcCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogIzAwMjA1ODtcbn1cblxuLnBhY2thZ2VzIGRpdi5wYWNrYWdlc19kZXNjIC50b3AgLmVkaXQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNlM2U2ZWE7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ucGFja2FnZXMgZGl2LnBhY2thZ2VzX2Rlc2MgLnRvcCAuZWRpdCBpOmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6ICM2ZmNmOTc7XG4gIGJvcmRlci1yaWdodDogMC41cHggc29saWQgI2UzZTZlYTtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4ucGFja2FnZXMgZGl2LnBhY2thZ2VzX2Rlc2MgLnRvcCAuZWRpdCBpOm50aC1jaGlsZCgyKSB7XG4gIGNvbG9yOiAjZGUyOTJmO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5wYWNrYWdlcyBkaXYucGFja2FnZXNfZGVzYyAubWlkZGxlIHtcbiAgd2lkdGg6IDQwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuLnBhY2thZ2VzIGRpdi5wYWNrYWdlc19kZXNjIC5taWRkbGUgcCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTQ0JTtcbiAgY29sb3I6IHJnYmEoMCwgMzIsIDg4LCAwLjQpO1xufVxuXG4ucGFja2FnZXMgZGl2LnBhY2thZ2VzX2Rlc2MgLmJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wYWNrYWdlcyBkaXYucGFja2FnZXNfZGVzYyAuYm90dG9tIC5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gIHdpZHRoOiAyOCU7XG59XG5cbi5wYWNrYWdlcyBkaXYucGFja2FnZXNfZGVzYyAuYm90dG9tIC5idXR0b25zIC50b3B1cCB7XG4gIGJvcmRlcjogMC43cHggc29saWQgI2ZmZDg3MztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDg3MztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxMHB4IDM4cHg7XG5cbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgY29sb3I6ICMwMDIwNTg7XG59XG5cbi5wYWNrYWdlcyBkaXYucGFja2FnZXNfZGVzYyAuYm90dG9tIC5idXR0b25zIC5yZWRlZW0ge1xuICBib3JkZXI6IDAuN3B4IHNvbGlkICMwMDIwNTg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDEwcHggNDJweDtcblxuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBjb2xvcjogIzAwMjA1ODtcbn1cblxuLnBhY2thZ2VzIGRpdi5wYWNrYWdlc19kZXNjIC5ib3R0b20gLnByaWNlIGgyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBsaW5lLWhlaWdodDogNDFweDtcbiAgY29sb3I6ICM2ZmNmOTc7XG59XG4vKiBFbmQgb2YgbXkgaW52ZXN0bWVudCBwYWdlICovXG5cbi8qIE5ldyBJbnZlc3RtZW50IFBhZ2UgKi9cblxuLmludmVzdG1lbnRfdHlwZXMge1xuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5pbnZlc3RtZW50X3R5cGVzID4gZGl2IHtcbiAgd2lkdGg6IDMyLjMzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uaW52ZXN0bWVudF90eXBlcyA+IGRpdiAudG9wIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmludmVzdG1lbnRfdHlwZXMgPiBkaXYgLnRvcCBwIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjMTUyMTQ0O1xufVxuXG4uaW52ZXN0bWVudF90eXBlcyA+IGRpdiAubWlkdSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA0MHB4IDA7XG59XG5cbi5pbnZlc3RtZW50X3R5cGVzIHAge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5pbnZlc3RtZW50X3R5cGVzID4gZGl2IC5taWR1IHA6Zmlyc3QtY2hpbGQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjYjJiN2JjO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmludmVzdG1lbnRfdHlwZXMgPiBkaXYgLm1pZHUgcDpudGgtY2hpbGQoMikge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4uaW52ZXN0bWVudF90eXBlcyA+IGRpdiAubWlkdSBwOm50aC1jaGlsZCgyKSBzcGFuIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNiMmI3YmM7XG4gIHBhZGRpbmc6IDAgMjVweDtcbn1cblxuLmludmVzdG1lbnRfdHlwZXMgPiBkaXYgLmRvd24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmludmVzdG1lbnRfdHlwZXMgPiBkaXYgLmRvd24gcCB7XG4gIGNvbG9yOiAjNmZjZjk3O1xufVxuXG4uaW52ZXN0bWVudF90eXBlcyA+IGRpdiAuZG93biBwOmZpcnN0LWNoaWxkIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmludmVzdG1lbnRfdHlwZXMgPiBkaXYgLmRvd24gcDpudGgtY2hpbGQoMikge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubG9nX3RpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4IDAgOHB4IDA7XG59XG5cbi5sb2dfdGl0bGUgZGl2IHAge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gIGNvbG9yOiAjMDAyMDU4O1xufVxuXG4ubG9nX3RpdGxlIGRpdiBhIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgY29sb3I6ICMxNTIxNDQ7XG59XG5cbi5sb2dzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oaXN0b3J5X3RhYmxlX3dyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5oaXN0b3J5X3RhYmxlX3dyYXBwZXIgLmhpc3RvcnlfdGFibGUgLnRhYmxlIHRoZWFkIHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcbn1cblxuLmhpc3RvcnlfdGFibGVfd3JhcHBlciAuaGlzdG9yeV90YWJsZSAudGFibGUgdGgge1xuICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5oaXN0b3J5X3RhYmxlIC50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGNvbG9yOiAjODk4ZDkyO1xufVxuLmhpc3RvcnlfdGFibGUgLnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgcGFkZGluZzogMzBweCAwLjc1cmVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZTNlNmVhO1xufVxuXG4uc3RhdHVzX2ljb25fZ29vZCBpIHtcbiAgY29sb3I6IHJnYigxNTYsIDI0MywgMjAzKTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDAgMTJweCAwIDAgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uaGlzdG9yeV90YWJsZSAudGFibGUgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgY29sb3I6ICNiMGM1ZGE7XG59XG5cbi5oaXN0b3J5X3RhYmxlIC50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIHBhZGRpbmc6IDMwcHggMC43NXJlbSAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2UzZTZlYTtcbn1cblxuLmhpc3RvcnlfdGFibGUgLnRhYmxlIHRib2R5IHRyIHRkOm50aC1jaGlsZCgzKSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3RhdHVzX2ljb25fYmFkIGkge1xuICBjb2xvcjogcmdiKDI0NSwgMTQ2LCAxNDYpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMCAxMnB4IDAgMCAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5oaXN0b3J5X3RhYmxlX3dyYXBwZXIgLmhpc3RvcnlfdGFibGUgLnRhYmxlIHRoZWFkIHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcbn1cblxuLmhpc3RvcnlfdGFibGVfd3JhcHBlciAuaGlzdG9yeV90YWJsZSAudGFibGUgdGgge1xuICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG59XG4uaGlzdG9yeV90YWJsZSAudGFibGUgdGhlYWQgdHIgdGgge1xuICBwYWRkaW5nOiAxOHB4IDFyZW0gIWltcG9ydGFudDtcbn1cbi5oaXN0b3J5X3RhYmxlIC50YWJsZSB0aCB7XG4gIGNvbG9yOiAjYjJiN2JjO1xufVxuXG4vKiBFbmQgb2YgbmV3IGludmVzdG1lbnQgcGFnZSAqL1xuXG4vKiBJbnZlc3RtZW50IERldGFpbHMgcGFnZSAqL1xuXG4uaW52ZXN0X2RldGFpbF90b3Age1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNDBweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmludmVzdF9kZXRhaWxfdG9wIC50aXRsZSBoNCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGNvbG9yOiAjMDAyMDU4O1xufVxuXG4uaW52ZXN0X2RldGFpbF90b3AgLmludmVzdF9idG4gYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxNDVweDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ncmVlbl9idG4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjE2LCAxMTUpO1xuICBjb2xvcjogIzAwMjA1ODtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmludmVzdF9kZXRhaWxfZGVzYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uaW52ZXN0X2RldGFpbF9kZXNjIGRpdi5sZWZ0IHtcbiAgd2lkdGg6IDMwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlNmVhO1xufVxuXG4uaW52ZXN0X2RldGFpbF9kZXNjIGRpdi5yaWdodCB7XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmc6IDAgMCAwIDQwcHg7XG59XG5cbi5pbnZlc3RfZGV0YWlsX2Rlc2MgZGl2LnJpZ2h0IC5yaWdodF9mb290ZXIgcCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmludmVzdF9kZXRhaWxfZGVzYyBkaXYucmlnaHQgLnJpZ2h0X2hlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW52ZXN0X2RldGFpbF9kZXNjIGRpdi5yaWdodCAucmlnaHRfaGVhZGVyIGg0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6ICMxNTIxNDQ7XG59XG5cbi5pbnZlc3RfZGV0YWlsX2Rlc2MgZGl2LnJpZ2h0IC5yaWdodF9oZWFkZXIgcCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGNvbG9yOiAjODk4ZDkyO1xuICB3aWR0aDogNzAlO1xuICBwYWRkaW5nOiA3cHggMCAhaW1wb3J0YW50O1xufVxuXG4uaW52ZXN0X2RldGFpbF9kZXNjIGRpdi5yaWdodCAucmlnaHRfZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5pbnZlc3RfZGV0YWlsX2Rlc2MgZGl2LnJpZ2h0IC5yaWdodF9mb290ZXIgZGl2IHtcbiAgcGFkZGluZy1yaWdodDogNjBweDtcbn1cblxuLmludmVzdF9kZXRhaWxfZGVzYyBkaXYucmlnaHQgLnJpZ2h0X2Zvb3RlciBkaXYgcDpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjYjJiN2JjO1xuICAvKiBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7ICovXG59XG5cbi5pbnZlc3RfZGV0YWlsX2Rlc2MgZGl2LnJpZ2h0IC5yaWdodF9mb290ZXIgZGl2OmZpcnN0LWNoaWxkIHA6bnRoLWNoaWxkKDIpIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM4OThkOTI7XG59XG5cbi5pbnZlc3RfZGV0YWlsX2Rlc2MgZGl2LnJpZ2h0IC5yaWdodF9mb290ZXIgZGl2IHtcbiAgcGFkZGluZy1yaWdodDogNjBweDtcbn1cblxuLmludmVzdF9kZXRhaWxfZGVzYyBkaXYucmlnaHQgLnJpZ2h0X2Zvb3RlciBkaXYgcDpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjYjJiN2JjO1xuICAvKiBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50OyAqL1xufVxuXG4uaW52ZXN0X2RldGFpbF9kZXNjIGRpdi5yaWdodCAucmlnaHRfZm9vdGVyIGRpdjpsYXN0LWNoaWxkIHA6bGFzdC1jaGlsZCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgY29sb3I6ICM2ZmNmOTc7XG59XG5cbi5jaGFydF9zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwMHB4IDA7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubW9kYWwtYm9keSAuaW52X2RlYXRhaWxzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAvKiBwYWRkaW5nOiA0MHB4IDUwcHg7ICovXG59XG5cbi5tb2RhbC1ib2R5IC5pbnZfZGVhdGFpbHMgLnVwcGVyX3BhcnQge1xuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHBhZGRpbmc6IDQwcHggNTBweDtcbn1cblxuLm1vZGFsLWJvZHkgLmludl9kZWF0YWlscyAudXBwZXJfcGFydCAuaW52X2RldGFpbHNfZGVzYyB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLm1vZGFsLWJvZHkgLmludl9kZWF0YWlscyAudXBwZXJfcGFydCAuaW52X2RldGFpbHNfZGVzYyAudGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjMTUyMTQ0O1xufVxuXG4ubW9kYWwtYm9keSAuaW52X2RlYXRhaWxzIC51cHBlcl9wYXJ0IC5pbnZfZGV0YWlsc19kZXNjIC5icmtfZG93biB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5tb2RhbC1ib2R5IC5pbnZfZGVhdGFpbHMgLnVwcGVyX3BhcnQgLmludl9kZXRhaWxzX2Rlc2MgLmJya19kb3duIC5pbnRlcmVzdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAzNSU7XG59XG5cbi5tb2RhbC1ib2R5IC5pbnZfZGVhdGFpbHMgLnVwcGVyX3BhcnQgLmludl9kZXRhaWxzX2Rlc2MgLmJya19kb3duID4gZGl2ID4gc3BhbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNiMmI3YmM7XG59XG5cbi5tb2RhbC1ib2R5IC5pbnZfZGVhdGFpbHMgLnVwcGVyX3BhcnQgLmludl9kZXRhaWxzX2Rlc2MgLmJya19kb3duID4gZGl2ID4gcCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwMDIwNTg7XG59XG5cbi5tb2RhbC1ib2R5XG4gIC5pbnZfZGVhdGFpbHNcbiAgLnVwcGVyX3BhcnRcbiAgLmludl9kZXRhaWxzX2Rlc2NcbiAgLmJya19kb3duXG4gIC5pbnZlc3RfYW1vdW50dFxuICBwXG4gIHNwYW4ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2IyYjdiYztcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4uaW52X2RlYXRhaWxzIC5saW5rX3BhcnQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTc4LCAxODMsIDE4OCwgMC4yKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTc4LCAxODMsIDE4OCwgMC4yKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbi5pbnZfZGVhdGFpbHMgLmxpbmtfcGFydCA+IGRpdiB7XG4gIHBhZGRpbmc6IDAgNDBweCAwIDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmludl9kZWF0YWlscyAubGlua19wYXJ0ID4gZGl2IHNwYW4ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjODk4ZDkyO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmludl9kZWF0YWlscyAubGlua19wYXJ0ID4gZGl2OmhvdmVyIHNwYW4ge1xuICBjb2xvcjogIzAxNDg4NjtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmludl9kZWF0YWlscyAubGlua19wYXJ0ID4gZGl2LmFjdGl2ZSBzcGFuIHtcbiAgY29sb3I6ICMwMTQ4ODY7XG59XG5cbi5pbnZfZGVhdGFpbHMgLmxpbmtfcGFydCA+IGRpdi5hY3RpdmUgc3BhbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTQ4ODY7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTIycHg7XG59XG4vKiAuaW52X2RlYXRhaWxzIC5saW5rX3BhcnQgPiBkaXYgc3BhbjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59ICovXG5cbi5pbnZfZGVhdGFpbHMgLmxpbmtfcGFydCA+IGRpdjpob3ZlciBzcGFuOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxNDg4NjtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMjJweDtcbn1cblxuLmludl9kZWF0YWlscyAuZm9ybV9kZXNjIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweDtcblxuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDMyLCA4OCwgMC44KTtcbn1cblxuLmludl9kZWF0YWlscyAubG9naW5faW5wdXRzIHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuXG4uYmdfZ3JleSBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiN2JjICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uaW52X2RlYXRhaWxzIC5wYXltZW50IHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAqL1xuICAvKiBwYWRkaW5nOiAzMHB4OyAqL1xufVxuXG4jbXlpbnZlc3RfcGF5bWVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pbnZfZGVhdGFpbHMgLnBheW1lbnQgLmNhcmRfb3B0aW9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnZfZGVhdGFpbHMgLnBheW1lbnQgLmNhcmRfb3B0aW9ucyAuY2FyZF9pY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5pbnZfZGVhdGFpbHMgLnBheW1lbnQgLmNhcmRfb3B0aW9ucyAuY2FyZF9uYW1lIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5pbnZfZGVhdGFpbHMgLnBheW1lbnQgLmNhcmRfb3B0aW9ucyAuY2FyZF9uYW1lIGg2IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzE4MjUzODtcbn1cblxuLmludl9kZWF0YWlscyAucGF5bWVudCAuY2FyZF9vcHRpb25zIC5jYXJkX25hbWUgcCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICMxODI1Mzg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmludl9kZWF0YWlscyAucGF5bWVudCAuY2FyZF9vcHRpb25zIC5pY29uX29uZSBpIHtcbiAgY29sb3I6ICMxMGMwNmQ7XG4gIGZvbnQtc2l6ZTogMjNweCAhaW1wb3J0YW50O1xufVxuXG4vKiBFbmQgb2YgaW52ZXN0bWVudCBkZXRhaWxzIHBhZ2UgKi9cblxuLyogUG9ydGZvbGlvIHBhZ2UgKi9cblxuLnRyYW5zYWN0aW9uX2hpc3RvcnlfdGl0bGUge1xuICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udHJhbnNhY3Rpb25faGlzdG9yeV9mb3JIaXN0b3J5IC50cmFuc2FjdGlvbl9oaXN0b3J5X3RpdGxlIGg1IHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLnRyYW5zYWN0aW9uX2hpc3RvcnlfdGl0bGUgaDUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gIGNvbG9yOiAjMDAyMDU4O1xufVxuXG4udHJhbnNhY3Rpb25faGlzdG9yeV90aXRsZSBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiAjMDE0ODg2O1xufVxuXG4udGFibGVfcGFnaW5hdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbi5wYWdpbmF0aW9uIC5wYWdlLWl0ZW0gLnBhZ2UtbGluazpmaXJzdC1jaGlsZCBpLFxuLnBhZ2luYXRpb24gLnBhZ2UtaXRlbSAucGFnZS1saW5rOmxhc3QtY2hpbGQgaSB7XG4gIG1hcmdpbjogMCAxMHB4ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5wYWdpbmF0aW9uIC5wYWdlLWl0ZW0gLnBhZ2UtbGluayB7XG4gIHBhZGRpbmc6IDExcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzg5OGQ5MjtcbiAgbWFyZ2luOiAwIDZweCAhaW1wb3J0YW50O1xufVxuXG4vKiBFbmQgb2YgcG9ydGZvbGlvIHBhZ2UgKi9cblxuLmludmVzdG9ycyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDAgNjBweCAzMHB4O1xufVxuXG4uaW52ZXN0b3JzIHA6Zmlyc3QtY2hpbGQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjYjJiN2JjO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaW52ZXN0b3JzIHA6bnRoLWNoaWxkKDIpIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNiMmI3YmM7XG59XG5cbi8qIE15IEFjY291bnQgcGFnZSAqL1xuXG4uYWNjb3VudF90aXRsZV90ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHggMCA2MHB4IDA7XG59XG5cbi5hY2NvdW50X3RpdGxlX3RleHQgaDUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDQxcHg7XG4gIGNvbG9yOiAjMDAyMDU4O1xufVxuXG4ubXlBY2NvdW50X3NldHRpbmdzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDAgMzBweCAwO1xufVxuXG4ubXlBY2NvdW50X3NldHRpbmdzIC5saW5rcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubXlBY2NvdW50X3NldHRpbmdzIC5saW5rcyA+IGRpdiB7XG4gIHBhZGRpbmc6IDVweCA0MHB4IDMwcHggNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubXlBY2NvdW50X3NldHRpbmdzIC5saW5rcyA+IGRpdiBzcGFuIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzg5OGQ5MjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC40cztcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5teUFjY291bnRfc2V0dGluZ3MgLmxpbmtzID4gZGl2OmhvdmVyIHNwYW4ge1xuICBjb2xvcjogIzAxNDg4NjtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLm15QWNjb3VudF9zZXR0aW5ncyAubGlua3MgPiBkaXYuYWN0aXZlIHNwYW4ge1xuICBjb2xvcjogIzAxNDg4Njtcbn1cblxuLm15QWNjb3VudF9zZXR0aW5ncyAubGlua3MgPiBkaXYuYWN0aXZlIHNwYW46YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE0ODg2O1xuICBsZWZ0OiAwO1xuICBib3R0b206IC02MCU7XG59XG4vKiAubXlBY2NvdW50X3NldHRpbmdzIC5saW5rcyA+IGRpdiBzcGFuOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn0gKi9cblxuLm15QWNjb3VudF9zZXR0aW5ncyAubGlua3MgPiBkaXY6aG92ZXIgc3BhbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTQ4ODY7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTYwJTtcbn1cblxuLm15QWNjb3VudF9zZXR0aW5ncyAuc2V0dGluZ3NfaW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDMwcHggMTAwcHggNDBweCAxMDBweDtcbiAgYm94LXNoYWRvdzogMCAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjAxNSk7XG59XG5cbi5teUFjY291bnRfc2V0dGluZ3MgLnNldHRpbmdzX2luZm8gPiAuaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiKDAsIDMyLCA4OCwgMC44KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDAgMzBweCAwO1xufVxuXG4uc2V0dGluZ3NfaW5mbyAuc2V0dGluZ3NfaW5wdXQge1xuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zZXR0aW5nc19pbmZvIC5zZXR0aW5nc19pbnB1dCAucHJvZl9waWNzIHtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5zZXR0aW5nc19pbmZvIC5zZXR0aW5nc19pbnB1dCAucHJvZl9mb3JtIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnNldHRpbmdzX2luZm8gLnNldHRpbmdzX2lucHV0IC5wcm9mX3BpY3MgLmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjODk4ZDkyO1xufVxuXG4uc2V0dGluZ3NfaW5mbyAuc2V0dGluZ3NfaW5wdXQgLnByb2ZfcGljcyAucHJvZl9pbWFnZSB7XG4gIHdpZHRoOiAxNzBweDtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDAgNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDE1KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2U2ZWE7XG59XG5cbi5zZXR0aW5nc19pbmZvIC5zZXR0aW5nc19pbnB1dCAucHJvZl9waWNzIC5lZGl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDI1cHggMDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNldHRpbmdzX2luZm8gLnNldHRpbmdzX2lucHV0IC5wcm9mX3BpY3MgLmVkaXQgPiBkaXYge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uc2V0dGluZ3NfaW5mbyAuc2V0dGluZ3NfaW5wdXQgLnByb2ZfcGljcyAuZWRpdCBkaXY6Zmlyc3QtY2hpbGQgaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5zZXR0aW5nc19pbmZvIC5zZXR0aW5nc19pbnB1dCAucHJvZl9waWNzIC5lZGl0IGRpdjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogMC41cHggc29saWQgI2UzZTZlYTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcblxuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4uc2V0dGluZ3NfaW5mbyAuc2V0dGluZ3NfaW5wdXQgLnByb2ZfcGljcyAuZWRpdCBkaXY6Zmlyc3QtY2hpbGQgYSB7XG4gIGNvbG9yOiAjMDE0ODg2O1xufVxuXG4uc2V0dGluZ3NfaW5mbyAuc2V0dGluZ3NfaW5wdXQgLnByb2ZfcGljcyAuZWRpdCBkaXY6bnRoLWNoaWxkKDIpIGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uc2V0dGluZ3NfaW5mbyAuc2V0dGluZ3NfaW5wdXQgLnByb2ZfcGljcyAuZWRpdCBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5zZXR0aW5nc19pbmZvIC5zZXR0aW5nc19pbnB1dCAucHJvZl9waWNzIC5lZGl0IGRpdjpudGgtY2hpbGQoMikgYSB7XG4gIGNvbG9yOiAjZGUyOTJmO1xufVxuXG4uZXh0cmFfc3BhY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMzBweCAxMjBweCAxNTBweCAxMjBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5wYXNzd29yZF91cGRhdGUge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJnX2JsdWUgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxNDg4NiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4jbXlhY2NvdW50X3VwZGF0ZV9wYXNzd29yZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIEVuZCBvZiBteSBhY2NvdW50IHBhZ2UgKi9cblxuLyogTW9kYWwgKi9cblxuLm1vZGFsX3dyYXBwZXIge1xuICBwYWRkaW5nOiAxMHB4IDMwcHggMzBweCAzMHB4O1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4jbWVlcF9zZXR0aW5ncyAubW9kYWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuI21lZXBfc2V0dGluZ3MgLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuI21lZXBfc2V0dGluZ3MgLm1vZGFsLWJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC8qIHBhZGRpbmc6IDMwcHggIWltcG9ydGFudDsgKi9cbn1cblxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xufVxuXG4vKiBFbmQgb2YgbW9kYWwgKi9cblxuLyogRW5kIG9mIGRhc2hib2FyZCAqL1xuXG4vKiBSZXNwb25zaXZlbnNzICovXG5cbi8qIGRpdi5maXJzdCBkaXYuaW5uZXIgZGl2OmZpcnN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBub25lO1xufSAqL1xuXG4vKiBFbmQgb2YgUmVzcG9uc2l2ZW5lc3MgKi9cblxuLyogbXkgY3VzdG9tIGJ1dHRvbnMgKi9cbmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2LmZvckJ1dHRvbiBidXR0b24ge1xuICBwYWRkaW5nOiAxMXB4IDc1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4NzM7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4udGV4dC1kYW5nZXIge1xuICBjb2xvcjogcmVkO1xufVxuIl19 */"

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
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");












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
                _confirm_otp_confirm_otp_module__WEBPACK_IMPORTED_MODULE_10__["ConfirmOtpModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_11__["DashboardModule"]
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

module.exports = "<section>\n\n  <div class=\"login_page_main_div\">\n\n    <!-- Login page Left Section -->\n\n    <div class=\"login_left_section\">\n\n      <!-- Company Logo -->\n\n      <div class=\"company_logo\">\n\n        <h3>\n          SFS\n        </h3>\n        <span>\n          Capital\n        </span>\n\n      </div>\n\n      <!--  -->\n\n      <!-- Welcome Note -->\n\n      <div class=\"welcome_note\">\n\n        <p>\n          Welcome to:\n        </p>\n\n        <h1>\n          SFS Financial <br> service Group\n        </h1>\n\n        <p>\n          product of a Management Buy-out of <br> Skye Financial Services Limited.\n        </p>\n\n      </div>\n\n      <!--  -->\n\n      <!-- Partners -->\n\n      <div class=\"patners_login_page\">\n\n        <!-- <div>\n              <!-- <i class=\"fab fa-accusoft\"></i>\n              <img src=\"../utils/icons/access.png\" alt=\"\">\n          </div>\n          <div>\n              <!-- <i class=\"fab fa-airbnb\"></i>\n              <img src=\"../utils/icons/bet.png\" alt=\"\">\n          </div>\n          <div>\n              <!-- <i class=\"fab fa-amazon-pay\"></i>\n              <img src=\"../utils/icons/branch.png\" alt=\"\">\n          </div>\n          <div>\n              <!-- <i class=\"fab fa-cpanel\"></i>\n              <img src=\"../utils/icons/fidel.png\" alt=\"\">\n          </div> -->\n\n      </div>\n\n      <!--  -->\n\n    </div>\n\n    <!--  -->\n\n    <!-- Login page right Section -->\n\n    <div class=\"login_right_section\">\n\n      <!-- Nav Section -->\n\n      <div class=\"login_mini_nav_two\">\n        <div>\n          <p>\n            <i class=\"fas fa-arrow-left\"></i>\n            Back to Home\n          </p>\n        </div>\n\n      </div>\n\n      <!--  -->\n\n      <!-- Form Section -->\n\n      <div class=\"center_form pt-4\">\n\n        <div class=\"login_form_div pt-5\">\n\n          <!-- Login Form Title -->\n\n          <div class=\"form_title\">\n            <h1 class=\"create_acc_text\">\n              Comfirm email address\n            </h1>\n            <p>\n              We’ve sent a 6 digits code to your email tied this <br> account. Enter code below\n            </p>\n          </div>\n\n          <!--  -->\n\n          <!-- Login Form Inputs -->\n\n          <div class=\"login_inputs\">\n            <form novalidate (ngSubmit)=\"confirmOtp()\" [formGroup]=\"confirmOtpForm\">\n\n              <ngb-alert *ngIf=\"alert.msg\" [type]=\"alert.type\" (close)=\"alert.msg = null\">{{alert.msg}}</ngb-alert>\n\n              <div class=\"input_div\">\n                <span class=\"formLabel\"> Enter Code </span>\n                <input type=\"text\" id=\"\" placeholder=\"Enter Code\" formControlName=\"otp\">\n                <span *ngIf=\"otp.invalid && (otp.dirty || otp.touched)\">\n                  <ul>\n                    <li *ngIf=\"otp.errors.required\" class=\"text-danger\">\n                      Please provide code sent to your email\n                    </li>\n                    <li *ngIf=\"otp.errors.pattern\" class=\"text-danger\">\n                      Code must be a number\n                    </li>\n                  </ul>\n                </span>\n                <div class=\"below_input\">\n\n                  <div class=\"left\">\n\n                    <p>\n                      Retry in <span>2:00</span>\n                    </p>\n\n                  </div>\n                  <div class=\"right\">\n\n                    <p>\n                      Did not get code. <span>Resend?</span>\n                    </p>\n\n                  </div>\n\n                </div>\n              </div>\n\n\n\n              <!-- <div class=\"btn_full_width green_btn\">\n                          <button>\n                              Login\n                          </button>\n                      </div> -->\n\n              <div class=\"btn_below_link\">\n\n                <div class=\"forLink prev_color\">\n                  <a href=\"#\">Previous</a>\n                </div>\n\n                <div class=\"forButton\">\n                  <button type=\"submit\" [disabled]=\"!confirmOtpForm.valid\" (click)=\"confirmOtp()\">\n                    Confirm OTP\n                  </button>\n                </div>\n\n              </div>\n\n\n\n            </form>\n          </div>\n\n          <!--  -->\n          <!-- {{confirmOtpForm.valid}} -->\n        </div>\n\n      </div>\n\n      <!--  -->\n\n    </div>\n\n    <!--  -->\n\n  </div>\n\n</section>\n"

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
/* harmony import */ var _shared_local_storage_keys_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/local-storage-keys.enum */ "./src/app/shared/local-storage-keys.enum.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alert_msg_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/alert-msg.service */ "./src/app/services/alert-msg.service.ts");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/utils */ "./src/app/shared/utils.ts");








var ConfirmOtpComponent = /** @class */ (function () {
    function ConfirmOtpComponent(router, formBuilder, authService, _alert) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this._alert = _alert;
    }
    ConfirmOtpComponent.prototype.ngOnInit = function () {
        this.alert.show();
        this.confirmOtpForm = this.formBuilder.group({
            otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]*$')]]
        });
    };
    Object.defineProperty(ConfirmOtpComponent.prototype, "alert", {
        get: function () {
            return this._alert;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfirmOtpComponent.prototype, "otp", {
        get: function () {
            return this.confirmOtpForm.get('otp');
        },
        enumerable: true,
        configurable: true
    });
    ConfirmOtpComponent.prototype.navigateToSignUp = function () {
        this.router.navigate(['create-account']);
    };
    ConfirmOtpComponent.prototype.navigateToDashboard = function () {
        this.router.navigate(['dashboard']);
    };
    ConfirmOtpComponent.prototype.confirmOtp = function () {
        var _this = this;
        var cachedPhoneNumber = sessionStorage.getItem(_shared_local_storage_keys_enum__WEBPACK_IMPORTED_MODULE_3__["LocalStorageKeys"].PHONE_NUMBER);
        var cachedOtpRef = sessionStorage.getItem(_shared_local_storage_keys_enum__WEBPACK_IMPORTED_MODULE_3__["LocalStorageKeys"].OTP_REF);
        var request = {
            otp: this.otp.value,
            otpRef: +cachedOtpRef,
            phoneNumber: cachedPhoneNumber
        };
        this.authService.confirmOtp(request)
            .subscribe(function (value) {
            console.log(value);
            if (value.body.data) {
                // redirect to dashboard
                localStorage.setItem(_shared_local_storage_keys_enum__WEBPACK_IMPORTED_MODULE_3__["LocalStorageKeys"].USER_DATA, JSON.stringify(value.body.data));
                localStorage.setItem(_shared_local_storage_keys_enum__WEBPACK_IMPORTED_MODULE_3__["LocalStorageKeys"].AUTH_TOKEN, value.headers.get(_shared_local_storage_keys_enum__WEBPACK_IMPORTED_MODULE_3__["LocalStorageKeys"].AUTH_TOKEN));
                _this.authService.userData = value.body.data;
                _this.navigateToDashboard();
                if (value.body.data.isVerified) {
                    _this.navigateToDashboard();
                }
                else {
                    _this.alert.type = _services_alert_msg_service__WEBPACK_IMPORTED_MODULE_6__["AlertType"].DANGER;
                    _this.alert.msg = 'Failed to confirm OTP';
                    _this.alert.show();
                }
            }
            else {
                _this.alert.type = _services_alert_msg_service__WEBPACK_IMPORTED_MODULE_6__["AlertType"].DANGER;
                _this.alert.msg = value.body.message;
                _this.alert.show();
            }
        }, function (error) {
            _this.alert.msg = _shared_utils__WEBPACK_IMPORTED_MODULE_7__["Utils"].handleError(error);
            _this.alert.type = _services_alert_msg_service__WEBPACK_IMPORTED_MODULE_6__["AlertType"].DANGER;
            _this.alert.show();
            console.log(error);
        });
    };
    ConfirmOtpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-otp',
            template: __webpack_require__(/*! ./confirm-otp.component.html */ "./src/app/confirm-otp/confirm-otp.component.html"),
            styles: [__webpack_require__(/*! ./confirm-otp.component.css */ "./src/app/confirm-otp/confirm-otp.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_alert_msg_service__WEBPACK_IMPORTED_MODULE_6__["AlertMsgService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");








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
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
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

module.exports = "<section>\n\n  <div class=\"login_page_main_div\">\n\n    <!-- Login page Left Section -->\n\n    <div class=\"login_left_section\">\n\n      <!-- Company Logo -->\n\n      <div class=\"company_logo\">\n\n        <h3>\n          SFS\n        </h3>\n        <span>\n          Capital\n        </span>\n\n      </div>\n\n      <!--  -->\n\n      <!-- Welcome Note -->\n\n      <div class=\"welcome_note\">\n\n        <p>\n          Welcome to:\n        </p>\n\n        <h1>\n          SFS Financial <br> service Group\n        </h1>\n\n        <p>\n          product of a Management Buy-out of <br> Skye Financial Services Limited.\n        </p>\n\n      </div>\n\n      <!--  -->\n\n      <!-- Partners -->\n\n      <div class=\"patners_login_page\">\n\n        <!-- <div>\n                <!-- <i class=\"fab fa-accusoft\"></i>\n                <img src=\"../utils/icons/access.png\" alt=\"\">\n            </div>\n            <div>\n                <!-- <i class=\"fab fa-airbnb\"></i>\n                <img src=\"../utils/icons/bet.png\" alt=\"\">\n            </div>\n            <div>\n                <!-- <i class=\"fab fa-amazon-pay\"></i>\n                <img src=\"../utils/icons/branch.png\" alt=\"\">\n            </div>\n            <div>\n                <!-- <i class=\"fab fa-cpanel\"></i>\n                <img src=\"../utils/icons/fidel.png\" alt=\"\">\n            </div> -->\n\n      </div>\n\n      <!--  -->\n\n    </div>\n\n    <!--  -->\n\n    <!-- Login page right Section -->\n\n    <div class=\"login_right_section\">\n\n      <!-- Nav Section -->\n\n      <div class=\"login_mini_nav\">\n        <div>\n          <p>\n            Have an account?\n          </p>\n        </div>\n        <div>\n          <button class=\"btn_getStarted\" (click)=\"navigateToLogin()\">\n            Login\n          </button>\n        </div>\n      </div>\n\n      <!--  -->\n\n      <!-- Form Section -->\n\n      <div class=\"center_form\">\n\n        <div class=\"login_form_div\">\n\n          <!-- Login Form Title -->\n\n          <div class=\"form_title\">\n            <h1 class=\"create_acc_text\">\n              Create an account\n            </h1>\n            <p>\n              Lets onboard you so we will know who you are, it will only take a minute.\n            </p>\n          </div>\n\n          <!--  -->\n\n          <!-- Login Form Inputs -->\n\n          <div class=\"login_inputs\">\n            <form novalidate (ngSubmit)=\"submitSignUpForm()\" [formGroup]=\"signupForm\">\n\n              <ngb-alert *ngIf=\"alert.msg\" [type]=\"alert.type\" (close)=\"alert.msg = null\">{{alert.msg}}</ngb-alert>\n\n              <div class=\"input_div\">\n                <span class=\"formLabel\"> First Name </span>\n                <input type=\"text\" id=\"\" placeholder=\"First Name\" formControlName=\"firstName\">\n                <span *ngIf=\"firstName.invalid && (firstName.dirty || firstName.touched)\">\n                  <ul>\n                    <li *ngIf=\"firstName.errors.required\" class=\"text-danger\">\n                      Please enter your firstname\n                    </li>\n                    <li *ngIf=\"firstName.errors.minlength\" class=\"text-danger\">\n                      Firstname can not be less than two characters\n                    </li>\n                  </ul>\n                </span>\n              </div>\n\n              <div class=\" input_div\">\n                <span class=\"formLabel\"> Last Name </span>\n                <input type=\"text\" id=\"\" placeholder=\"Last Name\" formControlName=\"lastName\">\n                <span *ngIf=\"lastName.invalid && (lastName.dirty || lastName.touched)\">\n                  <ul>\n                    <li *ngIf=\"lastName.errors.required\" class=\"text-danger\">\n                      Please enter your lastname\n                    </li>\n                    <li *ngIf=\"lastName.errors.minlength\" class=\"text-danger\">\n                      Lastname can not be less than two characters\n                    </li>\n                  </ul>\n                </span>\n              </div>\n\n              <div class=\"input_div\">\n                <span class=\"formLabel\"> Phone </span>\n                <input type=\"text\" id=\"\" placeholder=\"+2340000000000\" formControlName=\"phoneNumber\" maxLength=\"14\">\n                <span *ngIf=\"phoneNumber.invalid && (phoneNumber.dirty || phoneNumber.touched)\">\n                  <ul>\n                    <li *ngIf=\"phoneNumber.errors.required\" class=\"text-danger\">\n                      Please enter your phone number in the format specified\n                    </li>\n                    <li *ngIf=\"phoneNumber.errors.minlength\" class=\"text-danger\">\n                      Phone number can not be less than 14 characters\n                    </li>\n                    <li *ngIf=\"phoneNumber.errors.maxlength\" class=\"text-danger\">\n                      Phone number can not be more than 14 digits\n                    </li>\n                    <li *ngIf=\"phoneNumber.errors.pattern\" class=\"text-danger\">\n                      Invalid phone number\n                    </li>\n                  </ul>\n                </span>\n              </div>\n\n              <div class=\"input_div\">\n                <span class=\"formLabel\"> Email </span>\n                <input type=\"email\" id=\"\" placeholder=\"Email Address\" formControlName=\"email\">\n                <span *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n                  <ul>\n                    <li *ngIf=\"email.errors.required\" class=\"text-danger\">\n                      Please enter your email\n                    </li>\n                    <li *ngIf=\"email.errors.email\" class=\"text-danger\">\n                      invalid email\n                    </li>\n                  </ul>\n                </span>\n              </div>\n\n              <div class=\"input_div\">\n                <span class=\"formLabel\"> Password </span>\n                <input type=\"password\" id=\"\" placeholder=\"Password\" formControlName=\"password\">\n                <span *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n                  <ul>\n                    <li *ngIf=\"password.errors.required\" class=\"text-danger\">\n                      Please enter a password\n                    </li>\n                    <li *ngIf=\"password.errors.minlength\" class=\"text-danger\">\n                      Password can not be less than 6 characters\n                    </li>\n                  </ul>\n                </span>\n              </div>\n\n              <div class=\"input_div\">\n                <span class=\"formLabel\"> Confirm Password </span>\n                <input type=\"password\" id=\"\" placeholder=\"Confirm Password\" formControlName=\"comparePassword\">\n                <span *ngIf=\"comparePassword.invalid && (comparePassword.dirty || comparePassword.touched)\">\n                  <ul>\n                    <li *ngIf=\"comparePassword.errors.required\" class=\"text-danger\">\n                      Please confirm your password\n                    </li>\n                    <li *ngIf=\"comparePassword.errors.compare\" class=\"text-danger\">\n                      Passwords must match\n                    </li>\n                  </ul>\n                </span>\n              </div>\n\n              <!-- <div class=\"btn_full_width green_btn\">\n                            <button>\n                                Login\n                            </button>\n                        </div> -->\n\n              <div class=\"btn_below_link\">\n\n                <div class=\"forLink prev_color\">\n                  <a href=\"#\">Previous</a>\n                </div>\n\n                <div class=\"forButton\">\n                  <button type=\"submit\" [disabled]=\"!signupForm.valid\">Signup</button>\n                </div>\n              </div>\n\n            </form>\n          </div>\n          <!-- {{confirmPassword.errors['compare']}} -->\n          <!-- <br>Dirty: {{signupForm.dirty}}\n          <br>Touched: {{signupForm.touched}}\n          <br>Valid: {{signupForm.valid}}\n          <br>Value: {{signupForm.value | json}} -->\n          <!--  -->\n\n        </div>\n\n      </div>\n\n      <!--  -->\n\n    </div>\n\n    <!--  -->\n\n  </div>\n\n</section>\n"

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
/* harmony import */ var _shared_local_storage_keys_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/local-storage-keys.enum */ "./src/app/shared/local-storage-keys.enum.ts");
/* harmony import */ var _services_alert_msg_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/alert-msg.service */ "./src/app/services/alert-msg.service.ts");








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
    function CreateAccountComponent(router, formBuilder, authService, _alert) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this._alert = _alert;
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
    Object.defineProperty(CreateAccountComponent.prototype, "alert", {
        get: function () {
            return this._alert;
        },
        enumerable: true,
        configurable: true
    });
    CreateAccountComponent.prototype.navigateToConfirmOtp = function () {
        this.router.navigate(['confirm-otp']);
    };
    CreateAccountComponent.prototype.submitSignUpForm = function () {
        var _this = this;
        console.log("form_request => " + JSON.stringify(this.signupForm.value));
        var result;
        this.authService.createAccount(this.signupForm.value)
            .subscribe(function (response) {
            console.log(response);
            result = response.body;
            console.log(JSON.stringify(result));
            if (result && result.status) {
                // redirect to otp page
                var otp = result.data.otpRef;
                console.log("OTP => " + otp);
                sessionStorage.setItem(_shared_local_storage_keys_enum__WEBPACK_IMPORTED_MODULE_6__["LocalStorageKeys"].OTP_REF, otp);
                sessionStorage.setItem(_shared_local_storage_keys_enum__WEBPACK_IMPORTED_MODULE_6__["LocalStorageKeys"].PHONE_NUMBER, _this.phoneNumber.value);
                _this.navigateToConfirmOtp();
            }
            else {
                _this.alert.msg = result.message;
                _this.alert.type = _services_alert_msg_service__WEBPACK_IMPORTED_MODULE_7__["AlertType"].DANGER;
                _this._alert.show();
            }
        }, function (error) {
            _this.alert.type = _services_alert_msg_service__WEBPACK_IMPORTED_MODULE_7__["AlertType"].DANGER;
            _this.alert.msg = _shared_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].handleError(error);
            _this.alert.show();
            console.log(error);
            // this._alert.show(AlertType.DANGER, Utils.httpErrorMsg);
        });
    };
    CreateAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-account',
            template: __webpack_require__(/*! ./create-account.component.html */ "./src/app/create-account/create-account.component.html"),
            styles: [__webpack_require__(/*! ./create-account.component.css */ "./src/app/create-account/create-account.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_alert_msg_service__WEBPACK_IMPORTED_MODULE_7__["AlertMsgService"]])
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");








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
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
            ]
        })
    ], CreateAccountModule);
    return CreateAccountModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main_dashboad_wrapper\">\n\n  <div class=\"side_nav\">\n\n    <div class=\"site_logo\">\n      <img src=\"../../assets/images/logo.png\" alt=\"\">\n    </div>\n\n    <div class=\"side_links\">\n      <ul>\n        <li><a href=\"#\">\n            <i class=\"fas fa-th-large\"></i>\n            Overview\n          </a></li>\n        <li><a href=\"#\">\n            <i class=\"fas fa-copy\"></i>\n            Investment\n          </a></li>\n        <li><a href=\"#\">\n            <i class=\"fas fa-sync-alt\"></i>\n            Transactions\n          </a></li>\n        <li><a href=\"#\">\n            <i class=\"fas fa-share-alt\"></i>\n            Invite Friends\n          </a></li>\n        <li><a href=\"#\">\n            <i class=\"fas fa-cloud-download-alt\"></i>\n            Download statement\n          </a></li>\n      </ul>\n    </div>\n\n    <div class=\"sideNav_footer\">\n\n      <p>\n        2019 | Copright - sfs Capital\n      </p>\n\n    </div>\n\n  </div>\n\n  <div class=\"dashboard_body\">\n\n    <div class=\"dasboard_nav\">\n      <div class=\"notification\">\n        <p>\n          Hi Andie! you are yet to complete your account setup\n        </p>\n      </div>\n      <div class=\"user_sett\">\n\n        <div class=\"user_image\">\n          <img src=\"../../assets/images/user.png\" alt=\"\">\n        </div>\n        <div class=\"user_name\">\n          <p>\n            Andie kane <i class=\"fas fa-angle-down\"></i>\n          </p>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"dashboard_body_content\">\n\n      <div class=\"welcome_n_button\">\n\n        <div class=\"welcome\">\n          <h4>\n            Hi, Welcome\n          </h4>\n        </div>\n        <div class=\"buton\">\n          <button>\n            Invest Now <img src=\"../../assets/icons/check-circle.png\" alt=\"\">\n          </button>\n        </div>\n\n      </div>\n\n      <div class=\"cards\">\n\n        <div class=\"first_card\">\n          <div class=\"card_title\">\n            <span>\n              Total Invested\n            </span>\n          </div>\n          <div class=\"amount_invested\">\n            <span>\n              ₦ 35, 001,500.00\n            </span>\n          </div>\n          <div class=\"plans\">\n            <span>\n              from 15 investment plans\n            </span>\n          </div>\n        </div>\n\n        <div class=\"second_card\">\n          <div class=\"card_title\">\n            <span>\n              Total Invested\n            </span>\n          </div>\n          <div class=\"amount_invested\">\n            <span>\n              ₦ 35, 001,500.00\n            </span>\n          </div>\n          <div class=\"plans\">\n            <span>\n              from 15 investment plans\n            </span>\n          </div>\n        </div>\n\n        <div class=\"third_card\">\n          <div class=\"card_title\">\n            <span>\n              Total Invested\n            </span>\n          </div>\n          <div class=\"amount_invested\">\n            <span>\n              ₦ 35, 001,500.00\n            </span>\n          </div>\n          <div class=\"plans\">\n            <span>\n              from 15 investment plans\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"latest_investments\">\n\n        <div class=\"title\">\n          <h5>\n            Latest Investments\n          </h5>\n        </div>\n\n        <div class=\"investment_sections\">\n          <div class=\"fix_plan\">\n            <div class=\"product_container\">\n\n              <div class=\"invest_products_image\">\n\n                <div class=\"img_btn_link\">\n                  <a href=\"#\">\n                    Fixed Plan\n                  </a>\n                </div>\n\n                <div class=\"img_desc\">\n\n                  <h4>\n                    investment Title\n                  </h4>\n\n                  <p class=\"invest_desc\">\n                    The Company currently operates in 25 states in...\n                  </p>\n\n                </div>\n              </div>\n\n              <div class=\"interest_percentage\">\n\n                <p>\n                  interest\n                </p>\n                <p>\n                  <span>\n                    13% monthly\n                  </span>\n                </p>\n\n              </div>\n\n              <div class=\"invest_amount\">\n                <div class=\"title\">\n                  <p>\n                    InvestABLE Amount\n                  </p>\n\n                  <p>\n                    <span>₦ 55,000.00</span>\n                    <span> TO </span>\n                    <span> ABOVE </span>\n                  </p>\n                </div>\n\n              </div>\n\n              <div class=\"investors\">\n                <p>\n                  INVESTORS\n                </p>\n                <p>\n                  200\n                </p>\n              </div>\n\n              <!-- <div class=\"invest_product_footer\">\n\n                                      <div class=\"learn_more_link\">\n                                          <a href=\"#\">\n                                              Learn More\n                                          </a>\n                                      </div>\n\n                                      <div class=\"invest_now_link\">\n                                          <a href=\"#\">\n                                              Invest now <i class=\"fas fa-angle-right\"></i>\n                                          </a>\n                                      </div>\n\n                                  </div> -->\n            </div>\n          </div>\n          <div class=\"inv_chart\">\n            <div class=\"chart_title\">\n              <p>\n                Investment chart\n              </p>\n            </div>\n\n            <div class=\"chart_section pt-0\">\n\n              <canvas id=\"myChart\"></canvas>\n\n              <script>\n                var ctx = document.getElementById('myChart').getContext('2d');\n                var chart = new Chart(ctx, {\n                  // The type of chart we want to create\n                  type: 'line',\n\n                  // The data for our dataset\n                  data: {\n                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n                    datasets: [{\n                      label: 'My First dataset',\n                      backgroundColor: 'rgba(0, 0, 0,0)',\n                      borderColor: 'rgb(16, 192, 109)',\n                      data: [45, 30, 20, 5, 2, 10, 0]\n                    }]\n                  },\n\n                  // Configuration options go here\n                  options: {}\n                });\n\n              </script>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService) {
        this.authService = authService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log("user data from dashboard => " + this.authService.userData);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var routes = [
    { path: 'dashboard', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
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

module.exports = "<div class=\"first\">\n  <div class=\"inner\">\n    <div class=\"left\">\n\n      <div class=\"logo\">\n        <img src=\"../../assets/images/logo.png\" alt=\"\">\n      </div>\n\n      <div class=\"header_title\">\n        <span>\n          Our Mission is to <br> Empower your <br> financial Freedom\n        </span>\n      </div>\n\n      <div class=\"header_text\">\n        <p>\n          Do not allow life happen to you, come to us with your dreams\n          of a better life for you and your family and we will make it\n          happen.\n        </p>\n      </div>\n\n      <div class=\"header_btn\">\n\n        <a href=\"\" class=\"start\">Get started now</a>\n        <a href=\"\" class=\"learn\">Learn more about us</a>\n\n      </div>\n\n    </div>\n    <div class=\"right\">\n\n      <div>\n\n        <button class=\"login\" (click)=\"navigateToLogin()\">\n          Login\n        </button>\n\n      </div>\n\n      <div>\n        <button class=\"signup\" (click)=\"navigateToCreateAccount()\">\n          Signup\n        </button>\n      </div>\n\n\n\n    </div>\n  </div>\n</div>\n\n<div class=\"second\">\n\n  <div class=\"second_container\">\n\n    <div class=\"second_title\">\n      <h4>\n        Your guide to financial <br> wellness\n      </h4>\n    </div>\n\n    <div class=\"services\">\n      <div class=\"each_service\">\n        <div class=\"service_icon\">\n          <div>\n            <img src=\"../../assets/icons/service1.png\" alt=\"\">\n          </div>\n        </div>\n\n        <div class=\"service_title\">\n          <h4>\n            Invest your spare change\n          </h4>\n        </div>\n\n        <div class=\"service_text\">\n          <p>\n            Save time, avoid losing work and information, delegate, and track tasks to stay on schedule\n          </p>\n        </div>\n      </div>\n      <div class=\"each_service\">\n        <div class=\"service_icon\">\n          <div>\n            <img src=\"../../assets/icons/service2.png\" alt=\"\">\n          </div>\n        </div>\n\n        <div class=\"service_title\">\n          <h4>\n            Save for later\n          </h4>\n        </div>\n\n        <div class=\"service_text\">\n          <p>\n            Get ready for later in life using sfs Later, the easiest way to save for retirement.\n          </p>\n        </div>\n      </div>\n\n      <div class=\"each_service\">\n        <div class=\"service_icon\">\n          <div>\n            <img src=\"../../assets/icons/service3.png\" alt=\"\">\n          </div>\n        </div>\n\n        <div class=\"service_title\">\n          <h4>\n            Grow your knowledge\n          </h4>\n        </div>\n\n        <div class=\"service_text\">\n          <p>\n            Learn how to get more from your money with easy-to-understand articles and videos from\n            financial experts.\n          </p>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n\n</div>\n\n<div class=\"third\">\n\n  <div class=\"third_up\">\n    <div class=\"up_left\">\n      <img src=\"../../assets/images/up.png\" alt=\"\">\n    </div>\n    <div class=\"up_right\">\n      <h4>\n        Security that's strong as oak\n      </h4>\n      <p>\n        Do you waste time organizing sticky notes, searching\n        your email and apps for to-dos, and figuring out what to work on first?\n        Then you need one\n        solution to prioritize your tasks, manage your time, and meet your deadlines.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"third_up\">\n    <div class=\"up_right\">\n      <h4>\n        Why you should invest in your future\n      </h4>\n      <p>\n        Do you waste time organizing sticky notes, searching\n        your email and apps for to-dos, and figuring out what to work on first?\n        Then you need one\n        solution to prioritize your tasks, manage your time, and meet your deadlines.\n      </p>\n    </div>\n    <div class=\"up_left\">\n      <img src=\"../../assets/images/down.png\" alt=\"\">\n    </div>\n\n  </div>\n\n</div>\n\n<div class=\"fourth\">\n\n  <div class=\"second_container\">\n    <h4>\n      What investors like you <b>are</b><br>\n      <b>saying about</b> SFS\n    </h4>\n  </div>\n\n  <div class=\"comments\">\n\n    <div class=\"each_comments_div\">\n\n      <div class=\"each_comments\">\n\n        <div class=\"name_role\">\n          <p>\n            Fernando Soler\n          </p>\n          <span>\n            Telecommunication Engineer\n          </span>\n        </div>\n\n        <div class=\"comment_text\">\n          <p>\n            Quis autem vel eum iure reprehenderit qui in ea voluptate velit\n            esse quam nihil molestiae consequatur, vel illum qui dolorem eum\n            fugiat quo voluptas nulla pariatur? At vero eos et\n          </p>\n        </div>\n\n      </div>\n\n      <div class=\"each_comments\">\n\n        <div class=\"name_role\">\n          <p>\n            Fernando Soler\n          </p>\n          <span>\n            Telecommunication Engineer\n          </span>\n        </div>\n\n        <div class=\"comment_text\">\n          <p>\n            Quis autem vel eum iure reprehenderit qui in ea voluptate velit\n            esse quam nihil molestiae consequatur, vel illum qui dolorem eum\n            fugiat quo voluptas nulla pariatur? At vero eos et\n          </p>\n        </div>\n\n      </div>\n\n      <div class=\"each_comments\">\n\n        <div class=\"name_role\">\n          <p>\n            Fernando Soler\n          </p>\n          <span>\n            Telecommunication Engineer\n          </span>\n        </div>\n\n        <div class=\"comment_text\">\n          <p>\n            Quis autem vel eum iure reprehenderit qui in ea voluptate velit\n            esse quam nihil molestiae consequatur, vel illum qui dolorem eum\n            fugiat quo voluptas nulla pariatur? At vero eos et\n          </p>\n        </div>\n\n      </div>\n\n      <div class=\"each_comments\">\n\n        <div class=\"name_role\">\n          <p>\n            Fernando Soler\n          </p>\n          <span>\n            Telecommunication Engineer\n          </span>\n        </div>\n\n        <div class=\"comment_text\">\n          <p>\n            Quis autem vel eum iure reprehenderit qui in ea voluptate velit\n            esse quam nihil molestiae consequatur, vel illum qui dolorem eum\n            fugiat quo voluptas nulla pariatur? At vero eos et\n          </p>\n        </div>\n\n      </div>\n\n    </div>\n\n\n  </div>\n\n</div>\n\n<div class=\"footer\">\n\n  <div class=\"second_container\">\n\n    <div class=\"futa_header\">\n\n      <div class=\"text_1\">\n        <h5>\n          Our <br> channels\n        </h5>\n      </div>\n      <div class=\"text_2\">\n        <p>\n          Get access to sfs life using <br> any of the following plaforms\n        </p>\n      </div>\n\n    </div>\n\n    <div class=\"footer_icon_widget\">\n\n      <div class=\"ft_1\">\n\n        <div class=\"icon_img\">\n          <img src=\"../../assets/icons/v3.png\" alt=\"\">\n        </div>\n\n        <div class=\"download_inst\">\n          <span>\n            <i class=\"fas fa-download\"></i> Download on <br> Play Store\n          </span>\n        </div>\n\n      </div>\n      <div class=\"ft_2\">\n        <div class=\"icon_img\">\n          <img src=\"../../assets/icons/v2.png\" alt=\"\">\n        </div>\n\n        <div class=\"download_inst\">\n          <span>\n            <i class=\"fas fa-download\"></i> Download on <br> App Store\n          </span>\n        </div>\n      </div>\n      <div class=\"ft_3\">\n        <div class=\"icon_img\">\n          <img src=\"../../assets/icons/v1.png\" alt=\"\">\n        </div>\n\n        <div class=\"download_inst\">\n          <span>\n            <i class=\"fas fa-download\"></i> Get Started <br> Online\n          </span>\n        </div>\n      </div>\n      <div class=\"ft_4\">\n\n        <p>\n          Contact us for more infomation\n        </p>\n\n        <p>\n          Info@sfsnigeria.com\n        </p>\n\n        <p>\n          098-793 079-383\n        </p>\n\n      </div>\n\n    </div>\n\n    <div class=\"last_futa_section\">\n\n      <div>\n        <a href=\"#\"> FAQ </a>\n      </div>\n      <div>\n        <a href=\"#\"> Terms & Conditions </a>\n      </div>\n      <div>\n        <a href=\"#\"> Privacy Policy </a>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

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
            ],
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

module.exports = "<section>\n\n  <div class=\"login_page_main_div\">\n\n    <!-- Login page Left Section -->\n\n    <div class=\"login_left_section\">\n\n      <!-- Company Logo -->\n\n      <div class=\"company_logo\">\n\n        <h3>\n          SFS\n        </h3>\n        <span>\n          Capital\n        </span>\n\n      </div>\n\n      <!--  -->\n\n      <!-- Welcome Note -->\n\n      <div class=\"welcome_note\">\n\n        <p>\n          Welcome to:\n        </p>\n\n        <h1>\n          SFS Financial <br> service Group\n        </h1>\n\n        <p>\n          product of a Management Buy-out of <br> Skye Financial Services Limited.\n        </p>\n\n      </div>\n\n      <!--  -->\n\n      <!-- Partners -->\n\n      <div class=\"patners_login_page\">\n\n        <!-- <div>\n                <!-- <i class=\"fab fa-accusoft\"></i>\n                <img src=\"../utils/icons/access.png\" alt=\"\">\n            </div>\n            <div>\n                <!-- <i class=\"fab fa-airbnb\"></i>\n                <img src=\"../utils/icons/bet.png\" alt=\"\">\n            </div>\n            <div>\n                <!-- <i class=\"fab fa-amazon-pay\"></i>\n                <img src=\"../utils/icons/branch.png\" alt=\"\">\n            </div>\n            <div>\n                <!-- <i class=\"fab fa-cpanel\"></i>\n                <img src=\"../utils/icons/fidel.png\" alt=\"\">\n            </div> -->\n\n      </div>\n\n      <!--  -->\n\n    </div>\n\n    <!--  -->\n\n    <!-- Login page right Section -->\n\n    <div class=\"login_right_section\">\n\n      <!-- Nav Section -->\n\n      <div class=\"login_mini_nav\">\n        <div>\n          <p>\n            Don’t have an account?\n          </p>\n        </div>\n        <div>\n          <button class=\"btn_getStarted\" (click)=\"navigateToCreateAccount()\">\n            Signup\n          </button>\n        </div>\n      </div>\n\n      <!--  -->\n\n      <!-- Form Section -->\n\n      <div class=\"center_form\">\n        <div class=\"login_form_div pt-5\">\n\n          <!-- Login Form Title -->\n\n          <div class=\"form_title\">\n            <h1 class=\"create_acc_text\">\n              Login\n            </h1>\n            <p>\n              Sign in with your username or email <br> and password\n            </p>\n          </div>\n\n          <!--  -->\n\n          <!-- Login Form Inputs -->\n\n          <div class=\"login_inputs\">\n            <form novalidate [formGroup]=\"loginForm\" (ngSubmit)=\"submitLoginForm()\">\n              <!-- <app-alert-msg *ngIf=\"showAlert\" title=\"{{alertTitle}}\" [message]=\"alertMsg\" type=\"{alertType}\"></app-alert-msg> -->\n              <ngb-alert *ngIf=\"alert.msg\" [type]=\"alert.type\" (close)=\"alert.msg = null\">{{alert.msg}}</ngb-alert>\n              <div class=\"input_div\">\n                <span class=\"formLabel\"> Username </span>\n                <input type=\"text\" id=\"\" placeholder=\"Username\" formControlName=\"userName\">\n                <span *ngIf=\"userName.invalid && (userName.dirty || userName.touched)\">\n                  <ul>\n                    <li *ngIf=\"userName.errors.required\" class=\"text-danger\">\n                      Please input username\n                    </li>\n                  </ul>\n                </span>\n              </div>\n\n              <div class=\"input_div\">\n                <span class=\"formLabel\"> Password </span>\n                <input type=\"password\" id=\"\" placeholder=\"Password\" formControlName=\"password\">\n                <span *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n                  <ul>\n                    <li *ngIf=\"password.errors.required\" class=\"text-danger\">\n                      Please input password\n                    </li>\n                  </ul>\n                </span>\n              </div>\n\n              <!-- <div class=\"btn_full_width green_btn\">\n                            <button>\n                                Login\n                            </button>\n                        </div> -->\n\n              <div class=\"btn_below_link\">\n                <div class=\"forButton\">\n                  <button type=\"button\" (click)=\"submitLoginForm()\" [disabled]=\"!loginForm.valid\">Login</button>\n                </div>\n                <div class=\"forLink\">\n                  <a href=\"#\">Forgot Password?</a>\n                </div>\n              </div>\n\n\n\n            </form>\n          </div>\n\n          <!--  -->\n\n        </div>\n      </div>\n\n      <!--  -->\n\n    </div>\n\n    <!--  -->\n\n  </div>\n\n</section>\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _shared_local_storage_keys_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/local-storage-keys.enum */ "./src/app/shared/local-storage-keys.enum.ts");
/* harmony import */ var _services_alert_msg_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/alert-msg.service */ "./src/app/services/alert-msg.service.ts");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/utils */ "./src/app/shared/utils.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, formBuilder, _authService, _alert) {
        this.router = router;
        this.formBuilder = formBuilder;
        this._authService = _authService;
        this._alert = _alert;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.alert.configure();
        this.loginForm = this.formBuilder.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "alert", {
        get: function () {
            return this._alert;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "loginForm", {
        get: function () {
            return this._loginForm;
        },
        set: function (v) {
            this._loginForm = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "userName", {
        get: function () {
            return this.loginForm.get('userName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.navigateToDashboard = function () {
        this.router.navigate(['dashboard']);
    };
    LoginComponent.prototype.navigateToCreateAccount = function () {
        this.router.navigate(['create-account']);
    };
    LoginComponent.prototype.navigateToConfirmOtp = function () {
        this.router.navigate(['confirm-otp']);
    };
    LoginComponent.prototype.handleResendOtpLogic = function (email, phoneNumber) {
        var _this = this;
        var resendOtpReq = {
            email: email,
            phoneNumber: phoneNumber
        };
        var authToken = localStorage.getItem(_shared_local_storage_keys_enum__WEBPACK_IMPORTED_MODULE_5__["LocalStorageKeys"].AUTH_TOKEN);
        this._authService.resendOtp(resendOtpReq, authToken)
            .subscribe(function (value) {
            if (value.body && value.body.data.otpRef) {
                sessionStorage.setItem(_shared_local_storage_keys_enum__WEBPACK_IMPORTED_MODULE_5__["LocalStorageKeys"].OTP_REF, value.body.data.otpRef);
                sessionStorage.setItem(_shared_local_storage_keys_enum__WEBPACK_IMPORTED_MODULE_5__["LocalStorageKeys"].PHONE_NUMBER, phoneNumber);
                _this.alert.msg = value.body.message + '...Please check your email';
                _this.alert.type = _services_alert_msg_service__WEBPACK_IMPORTED_MODULE_6__["AlertType"].SUCCESS;
                _this.navigateToConfirmOtp();
            }
        }, function (error) {
            _this.alert.type = _services_alert_msg_service__WEBPACK_IMPORTED_MODULE_6__["AlertType"].DANGER;
            _this.alert.msg = _shared_utils__WEBPACK_IMPORTED_MODULE_7__["Utils"].handleError(error);
            _this.alert.show();
        });
    };
    LoginComponent.prototype.submitLoginForm = function () {
        var _this = this;
        var loginReq = this.loginForm.value;
        this._authService.login(loginReq)
            .subscribe(function (value) {
            if (value.body.data) {
                // redirect to dashboard
                console.log(value);
                localStorage.setItem(_shared_local_storage_keys_enum__WEBPACK_IMPORTED_MODULE_5__["LocalStorageKeys"].USER_DATA, JSON.stringify(value.body.data));
                localStorage.setItem(_shared_local_storage_keys_enum__WEBPACK_IMPORTED_MODULE_5__["LocalStorageKeys"].AUTH_TOKEN, value.headers.get(_shared_local_storage_keys_enum__WEBPACK_IMPORTED_MODULE_5__["LocalStorageKeys"].AUTH_TOKEN));
                _this._authService.userData = value.body.data;
                if (value.body.data.isVerified) {
                    _this.navigateToDashboard();
                }
                else {
                    _this.handleResendOtpLogic(value.body.data.email, value.body.data.phoneNumber);
                }
            }
            else {
                _this.alert.msg = value.body.message;
                _this.alert.type = _services_alert_msg_service__WEBPACK_IMPORTED_MODULE_6__["AlertType"].DANGER;
                _this.alert.show();
            }
        }, function (errorRes) {
            _this.alert.msg = _shared_utils__WEBPACK_IMPORTED_MODULE_7__["Utils"].handleError(errorRes);
            _this.alert.type = _services_alert_msg_service__WEBPACK_IMPORTED_MODULE_6__["AlertType"].DANGER;
            _this.alert.show();
            console.log(errorRes);
            // this.alert.show(AlertType.DANGER, Utils.httpErrorMsg);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_alert_msg_service__WEBPACK_IMPORTED_MODULE_6__["AlertMsgService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");








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
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/services/alert-msg.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/alert-msg.service.ts ***!
  \***********************************************/
/*! exports provided: AlertType, AlertMsgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertMsgService", function() { return AlertMsgService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AlertType;
(function (AlertType) {
    AlertType["DANGER"] = "danger";
    AlertType["SUCCESS"] = "success";
    AlertType["INFO"] = "info";
})(AlertType || (AlertType = {}));
var AlertMsgService = /** @class */ (function () {
    function AlertMsgService() {
        this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AlertMsgService.prototype.configure = function () {
        var _this = this;
        this._subject.subscribe(function (message) { return _this._msg = message; });
        this._subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(5000)).subscribe(function () { return _this.msg = null; });
    };
    // show(alert: AlertMsg): void {
    //   this._subject.next(alert);
    // }
    AlertMsgService.prototype.show = function () {
        if (this.msg && this.type) {
            this._subject.next(this.msg);
        }
    };
    Object.defineProperty(AlertMsgService.prototype, "alertMsg", {
        get: function () {
            return this._alertMsg;
        },
        set: function (v) {
            this._alertMsg = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertMsgService.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (v) {
            this._type = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertMsgService.prototype, "msg", {
        get: function () {
            return this._msg;
        },
        set: function (v) {
            this._msg = v;
        },
        enumerable: true,
        configurable: true
    });
    AlertMsgService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertMsgService);
    return AlertMsgService;
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
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils */ "./src/app/shared/utils.ts");




var AuthService = /** @class */ (function () {
    function AuthService(httpClient) {
        this.httpClient = httpClient;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
    }
    Object.defineProperty(AuthService.prototype, "userData", {
        get: function () {
            return this._userData;
        },
        set: function (v) {
            this._userData = v;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.createAccount = function (signUpReq) {
        return this.httpClient.post(_shared_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].apiBaseUrl + "api/Customer/create", signUpReq, {
            headers: _shared_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].setRequestHeader(),
            observe: 'response'
        });
    };
    AuthService.prototype.confirmOtp = function (request) {
        return this.httpClient.post(_shared_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].apiBaseUrl + "api/Customer/verify", request, {
            headers: _shared_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].setRequestHeader(),
            observe: 'response'
        });
    };
    AuthService.prototype.login = function (request) {
        return this.httpClient.post(_shared_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].apiBaseUrl + "api/Customer/login", request, {
            headers: _shared_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].setRequestHeader(),
            observe: 'response'
        });
    };
    AuthService.prototype.resendOtp = function (request, authToken) {
        return this.httpClient.post(_shared_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].apiBaseUrl + "api/Customer/resendtoken", request, {
            headers: _shared_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].setRequestHeader(authToken),
            observe: 'response'
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

/***/ "./src/app/shared/local-storage-keys.enum.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/local-storage-keys.enum.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageKeys", function() { return LocalStorageKeys; });
var LocalStorageKeys;
(function (LocalStorageKeys) {
    LocalStorageKeys["OTP_REF"] = "otpRef";
    LocalStorageKeys["PHONE_NUMBER"] = "phoneNumber";
    LocalStorageKeys["USER_DATA"] = "user";
    LocalStorageKeys["AUTH_TOKEN"] = "Token";
    LocalStorageKeys["ALERT_MSG"] = "alertMsg";
})(LocalStorageKeys || (LocalStorageKeys = {}));


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
/* harmony import */ var _services_alert_msg_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/alert-msg.service */ "./src/app/services/alert-msg.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


var Utils = /** @class */ (function () {
    function Utils() {
        this.urlmap = new Map();
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
    Utils.handleHttpError = function () {
        return {
            message: 'Something went wrong...please retry.',
            type: _services_alert_msg_service__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER
        };
    };
    Utils.setRequestHeader = function (authToken) {
        if (authToken) {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: authToken
            });
        }
        else {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            });
        }
    };
    Utils.handleError = function (errorRes) {
        var error = '';
        var errorMsgs = errorRes.error;
        for (var _i = 0, _a = errorMsgs.data; _i < _a.length; _i++) {
            var errorMsg = _a[_i];
            error += errorMsg.message + '\n';
        }
        return error;
    };
    Utils.apiBaseUrl = 'http://sfs-digital.herokuapp.com/';
    Utils.httpErrorMsg = 'Something went wrong...please try again';
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