'use strict';

describe('rich', function() {

	beforeEach(function() {
		browser().navigateTo('../../app/rich/index.html');
	});

	it('should render 2 controls', function() {
		expect(element('.ade-editable').count()).toEqual(2);
	});

	it('should show a popup on click', function() {
		element('.ade-editable:eq(0)').click();
		expect(element('.ade-editable + .ade-popup').count()).toEqual(1);
	});

	//TODO: fix
	xit('should detect click outside to save edit', function() {
		element('.ade-editable:eq(0)').click();
		
		element('.ade-editable:eq(0) + .ade-popup textarea').text('testing rich editor');
		//TODO: click outside

		expect(element('.ade-editable:eq(0)').text()).toContain('testing rich editor');
	});

	//TODO: fix
	xit('should edit/save entry with TAB', function() {
		element('.ade-editable:eq(0)').click();
		appElement('.ade-editable:eq(0) + .ade-popup textarea', function(elm) {
			elm.text('testing rich editor');
			elm.trigger({ type : 'keydown', keyCode: 9 });
		});
		expect(element('.ade-editable:eq(0) + .ade-popup').count()).toEqual(0);
		expect(element('.ade-editable:eq(0)').text()).toBe('testing rich editor');
	});

	//TODO: fix
	xit('should abort editing entry', function() {
		element('.ade-editable:eq(0)').click();
		appElement('.ade-editable:eq(0) + .ade-popup textarea', function(elm) {
			elm.text('testing rich editor');
			elm.trigger({ type : 'keydown', keyCode: 27 });
		});
		expect(element('.ade-editable:eq(0) + .ade-popup').count()).toEqual(0);
		expect(element('.ade-editable:eq(0)').text()).toBe('click to edit this very v...');
	});
});