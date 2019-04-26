/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/26
 */

export const setDomStyle = (target_dom, style_obj) => {
	let style_str = ';'
	for(let key in style_obj) {
		style_str += key + ':' + style_obj[key] + ';'
	}
	target_dom.style.cssText = style_str
}