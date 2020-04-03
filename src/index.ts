export default function show_loading(showtitle: string, mask?: boolean) {
	return new Promise<boolean>((resolve) => {
		wx.showLoading({
			mask,
			title: showtitle,
			success() {
				resolve(true);
			}
		});
	});
}
