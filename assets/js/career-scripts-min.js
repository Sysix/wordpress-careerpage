function isEmpty(t){for(var a in t)if(t.hasOwnProperty(a))return!1;return!0}jQuery(document).ready((function(t){t("a.open-job-dialog").on("click",(function(a){a.preventDefault();var e=t(this).attr("data-title"),r=t(this).attr("data-handle"),o=t(this).attr("data-shorthandle"),i=t(this).attr("data-showurl"),s=t(this).attr("data-applyurl"),n=t(this).attr("data-applyaddress"),l=t(this).attr("data-bannerurl"),d=t(this).attr("data-templates"),f=t(this).attr("data-departments"),p=t(this).attr("data-cities"),u=t(this).attr("data-positiontypes"),c=t(this).attr("data-seniorities"),h=t(this).attr("data-headcount"),m=t(this).attr("data-instances"),g=t(this).attr("data-team"),_=t(this).attr("data-custom-data-fields");_=(_=_.split('\\\\\\"').join("'")).replace(/\\u([0-9a-fA-F]{4})/g,((t,a)=>String.fromCharCode("0x"+a))).replace(/\\/g,""),_=JSON.parse(_.substring(1,_.length-1));var y="<ul>";Object.keys(_.custom_data_field).forEach((function(t){var a=_.custom_data_field[t].id;"object"==typeof a&&(a="");var e=_.custom_data_field[t].name;"object"==typeof e&&(e="");var r=_.custom_data_field[t].form_label;"object"==typeof r&&(r="");var o=_.custom_data_field[t].value_id;"object"==typeof o&&(o="");var i=_.custom_data_field[t].value;"object"==typeof i&&(i="");var s=_.custom_data_field[t].value_label;"object"==typeof s&&(s=""),y+="<li>id: "+a+", name: "+e+", form_label: "+r+", value_id: "+o+", value: "+i+", value_label: "+s+"</li>"})),y+="</ul>";var x=t(this).attr("data-published-at"),v=t(this).attr("data-startofwork"),b=t(this).attr("data-industries");t("<div></div>").dialog({modal:!0,title:e,width:"700px",open:function(){var a="<strong>Title:</strong> "+e+"<br /><strong>Handle:</strong> "+r+"<br /><strong>Short Handle:</strong> "+o+'<br /><strong>Show URL:</strong> <a href="'+i+'" target="_blank">'+i+'</a><br /><strong>Apply URL:</strong> <a href="'+s+'" target="_blank">'+s+"</a><br /><strong>Apply Address:</strong> "+n+"<br /><strong>Template:</strong> "+d+'<br /><strong>Banner URL:</strong> <a href="'+l+'" target="_blank">'+l+"</a><br /><strong>Department:</strong> "+f+"<br /><strong>City:</strong> "+p+"<br /><strong>PositionType:</strong> "+u+"<br /><strong>Seniority:</strong> "+c+"<br /><strong>Headcount:</strong> "+h+"<br /><strong>Instance:</strong> "+m+"<br /><strong>Team:</strong> "+g+"<br /><strong>Published at:</strong> "+x+"<br /><strong>Start of Work:</strong> "+v+"<br /><strong>Industry:</strong> "+b+"<br /><strong>Custom Data Fields:</strong> "+y+"<br />";t(this).html(a)},buttons:{Ok:function(){t(this).dialog("close")}}})})),t("a.open-instance-dialog").on("click",(function(a){a.preventDefault();var e=t(this).attr("data-title"),r=t(this).attr("data-id"),o=t(this).attr("data-islegal"),i=t(this).attr("data-handle");t("<div></div>").dialog({modal:!0,title:e,width:"400px",open:function(){var a="ID: "+r+"<br />Is Legal Entity: "+o+"<br />Handle: "+i;t(this).html(a)},buttons:{Ok:function(){t(this).dialog("close")}}})})),t("a.open-team-dialog").on("click",(function(a){a.preventDefault();var e=t(this).attr("data-title"),r=t(this).attr("data-id");t("<div></div>").dialog({modal:!0,title:e,width:"400px",open:function(){var a="ID: "+r;t(this).html(a)},buttons:{Ok:function(){t(this).dialog("close")}}})})),t("a.open-department-dialog").on("click",(function(a){a.preventDefault();var e=t(this).attr("data-title"),r=t(this).attr("data-id");t("<div></div>").dialog({modal:!0,title:e,width:"400px",open:function(){var a="ID: "+r;t(this).html(a)},buttons:{Ok:function(){t(this).dialog("close")}}})})),t("a.open-positiontype-dialog").on("click",(function(a){a.preventDefault();var e=t(this).attr("data-title"),r=t(this).attr("data-id");t("<div></div>").dialog({modal:!0,title:e,width:"400px",open:function(){var a="ID: "+r;t(this).html(a)},buttons:{Ok:function(){t(this).dialog("close")}}})})),t("a.open-city-dialog").on("click",(function(a){a.preventDefault();var e=t(this).attr("data-title"),r=t(this).attr("data-id"),o=t(this).attr("data-country"),i=t(this).attr("data-countrycode"),s=t(this).attr("data-lat"),n=t(this).attr("data-lng");t("<div></div>").dialog({modal:!0,title:e,width:"400px",open:function(){var a="ID: "+r+"<br />Country: "+o+"<br />CountryCode: "+i+"<br />Lat: "+s+"<br />Long: "+n;t(this).html(a)},buttons:{Ok:function(){t(this).dialog("close")}}})})),t(".loadjobs").on("click",(function(a){t(".ps_career_ajax_result").html(""),t(".ps_career_ajax_result").html('<svg style="width: 13px; height: auto; margin-right: 10px;" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-opacity="0" offset="0%"/><stop stop-opacity=".631" offset="63.146%"/><stop offset="100%"/></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/></path><circle fill="#fff" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/></circle></g></svg> Jobs werden importiert ...');jQuery.post(ajaxurl,{action:"manually_import_jobs"},(function(a){t(".ps_career_ajax_result").html(a)}))})),t(".loadcustomfields").on("click",(function(a){t(".ps_career_ajax_result").html(""),t(".ps_career_ajax_result").html('<svg style="width: 13px; height: auto; margin-right: 10px;" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-opacity="0" offset="0%"/><stop stop-opacity=".631" offset="63.146%"/><stop offset="100%"/></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/></path><circle fill="#fff" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/></circle></g></svg> Custom Fields werden importiert ...');jQuery.post(ajaxurl,{action:"manually_import_application_custom_fields"},(function(a){t(".ps_career_ajax_result").html(a)}))})),t(".loadcustomfieldformtemplates").on("click",(function(a){t(".ps_career_ajax_result").html(""),t(".ps_career_ajax_result").html('<svg style="width: 13px; height: auto; margin-right: 10px;" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-opacity="0" offset="0%"/><stop stop-opacity=".631" offset="63.146%"/><stop offset="100%"/></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/></path><circle fill="#fff" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/></circle></g></svg> Custom Fields werden importiert ...');jQuery.post(ajaxurl,{action:"manually_import_application_custom_field_form_templates"},(function(a){t(".ps_career_ajax_result").html(a)}))})),t(".loadtags").on("click",(function(a){t(".ps_career_ajax_result").html(""),t(".ps_career_ajax_result").html('<svg style="width: 13px; height: auto; margin-right: 10px;" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-opacity="0" offset="0%"/><stop stop-opacity=".631" offset="63.146%"/><stop offset="100%"/></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/></path><circle fill="#fff" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/></circle></g></svg> Tags werden importiert ...');jQuery.post(ajaxurl,{action:"manually_import_application_tags"},(function(a){t(".ps_career_ajax_result").html(a)}))})),t(".loadgoogleindex").on("click",(function(a){t(".ps_career_ajax_result").html(""),t(".ps_career_ajax_result").html('<svg style="width: 13px; height: auto; margin-right: 10px;" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-opacity="0" offset="0%"/><stop stop-opacity=".631" offset="63.146%"/><stop offset="100%"/></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/></path><circle fill="#fff" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/></circle></g></svg> Google Index wird aktualisiert ...');jQuery.post(ajaxurl,{action:"manually_update_google_index"},(function(a){t(".ps_career_ajax_result").html(a)}))})),t(".testgoogleindex").on("click",(function(a){a.preventDefault(),t(".ps_career_ajax_result").html(""),t(".ps_career_ajax_result").html('<svg style="width: 13px; height: auto; margin-right: 10px;" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-opacity="0" offset="0%"/><stop stop-opacity=".631" offset="63.146%"/><stop offset="100%"/></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/></path><circle fill="#fff" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/></circle></g></svg> Google Index wird getestet ...');jQuery.post(ajaxurl,{action:"test_google_index"},(function(a){t(".ps_career_ajax_result").html(a)}))}))}));