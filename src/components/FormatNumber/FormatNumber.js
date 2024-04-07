function formatNumber(num) {
    if (num >= 1000000000) {
        // Chia số cho 1 tỉ và làm tròn đến một chữ số thập phân
        const rounded = Math.round((num / 1000000000) * 10) / 10;
        // Thêm hậu tố "B" (tỉ) vào sau kết quả đã chia
        return `${rounded}B`;
    } else if (num >= 1000000) {
        // Chia số cho 1 triệu và làm tròn đến một chữ số thập phân
        const rounded = Math.round((num / 1000000) * 10) / 10;
        // Thêm hậu tố "M" (triệu) vào sau kết quả đã chia
        return `${rounded}M`;
    } else if (num >= 1000) {
        // Chia số cho 1000 và làm tròn đến một chữ số thập phân
        const rounded = Math.round((num / 1000) * 10) / 10;
        // Thêm hậu tố "K" (nghìn) vào sau kết quả đã chia
        return `${rounded}K`;
    }
    // Nếu số nhỏ hơn 1000, không cần thay đổi
    return num.toString();
}

export default formatNumber;
