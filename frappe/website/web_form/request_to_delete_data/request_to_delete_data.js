frappe.ready(function() {
	frappe.web_form.after_load = () => {
		frappe.call({
			method: "frappe.website.doctype.website_settings.website_settings.get_account_deletion_sla",
			callback: (data) => {
				if (data.message) {
					const intro_wrapper = $('#introduction .ql-editor.read-mode');
					const sla_description = __("Note: Your request for account deletion will be fulfilled within {0} days.", [data.message]);
					const sla_description_wrapper = `<br><b>${sla_description}</b>`;
					intro_wrapper.html(intro_wrapper.html() + sla_description_wrapper);
				}
			}
		});
	};
});
