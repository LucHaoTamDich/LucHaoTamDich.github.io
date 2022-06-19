const HaoAm = './IMG/am.png';
const HaoAmDong = './IMG/amdong.png';
const HaoDuong = './IMG/duong.png';
const HaoDuongDong = './IMG/duongdong.png';

// JavaScript Document
function khiloaxong() {
	var today = new Date();
	var currentDate = today.getDate();
	var currentMonth = today.getMonth() + 1;
	var currentYear = today.getFullYear();
	var currentHours = today.getHours();
	var currentMinutes = today.getMinutes();
	document.getElementById('chonngay1').innerHTML = currentDate;
	document.getElementById('chonnam1').innerHTML = currentYear;
	document.getElementById('chonthang1').innerHTML = "Tháng " + currentMonth;
	document.getElementById('chonthang1').setAttribute('value', currentMonth);
	document.getElementById('chongio1').innerHTML = currentHours;
	document.getElementById('chonphut1').innerHTML = currentMinutes;
}
//////// Tính Âm Lịch
var TK19 = new Array(
	0x30baa3, 0x56ab50, 0x422ba0, 0x2cab61, 0x52a370, 0x3c51e8, 0x60d160, 0x4ae4b0, 0x376926, 0x58daa0,
	0x445b50, 0x3116d2, 0x562ae0, 0x3ea2e0, 0x28e2d2, 0x4ec950, 0x38d556, 0x5cb520, 0x46b690, 0x325da4,
	0x5855d0, 0x4225d0, 0x2ca5b3, 0x52a2b0, 0x3da8b7, 0x60a950, 0x4ab4a0, 0x35b2a5, 0x5aad50, 0x4455b0,
	0x302b74, 0x562570, 0x4052f9, 0x6452b0, 0x4e6950, 0x386d56, 0x5e5aa0, 0x46ab50, 0x3256d4, 0x584ae0,
	0x42a570, 0x2d4553, 0x50d2a0, 0x3be8a7, 0x60d550, 0x4a5aa0, 0x34ada5, 0x5a95d0, 0x464ae0, 0x2eaab4,
	0x54a4d0, 0x3ed2b8, 0x64b290, 0x4cb550, 0x385757, 0x5e2da0, 0x4895d0, 0x324d75, 0x5849b0, 0x42a4b0,
	0x2da4b3, 0x506a90, 0x3aad98, 0x606b50, 0x4c2b60, 0x359365, 0x5a9370, 0x464970, 0x306964, 0x52e4a0,
	0x3cea6a, 0x62da90, 0x4e5ad0, 0x392ad6, 0x5e2ae0, 0x4892e0, 0x32cad5, 0x56c950, 0x40d4a0, 0x2bd4a3,
	0x50b690, 0x3a57a7, 0x6055b0, 0x4c25d0, 0x3695b5, 0x5a92b0, 0x44a950, 0x2ed954, 0x54b4a0, 0x3cb550,
	0x286b52, 0x4e55b0, 0x3a2776, 0x5e2570, 0x4852b0, 0x32aaa5, 0x56e950, 0x406aa0, 0x2abaa3, 0x50ab50
); /* Years 2000-2099 */
var TK20 = new Array(
	0x3c4bd8, 0x624ae0, 0x4ca570, 0x3854d5, 0x5cd260, 0x44d950, 0x315554, 0x5656a0, 0x409ad0, 0x2a55d2,
	0x504ae0, 0x3aa5b6, 0x60a4d0, 0x48d250, 0x33d255, 0x58b540, 0x42d6a0, 0x2cada2, 0x5295b0, 0x3f4977,
	0x644970, 0x4ca4b0, 0x36b4b5, 0x5c6a50, 0x466d50, 0x312b54, 0x562b60, 0x409570, 0x2c52f2, 0x504970,
	0x3a6566, 0x5ed4a0, 0x48ea50, 0x336a95, 0x585ad0, 0x442b60, 0x2f86e3, 0x5292e0, 0x3dc8d7, 0x62c950,
	0x4cd4a0, 0x35d8a6, 0x5ab550, 0x4656a0, 0x31a5b4, 0x5625d0, 0x4092d0, 0x2ad2b2, 0x50a950, 0x38b557,
	0x5e6ca0, 0x48b550, 0x355355, 0x584da0, 0x42a5b0, 0x2f4573, 0x5452b0, 0x3ca9a8, 0x60e950, 0x4c6aa0,
	0x36aea6, 0x5aab50, 0x464b60, 0x30aae4, 0x56a570, 0x405260, 0x28f263, 0x4ed940, 0x38db47, 0x5cd6a0,
	0x4896d0, 0x344dd5, 0x5a4ad0, 0x42a4d0, 0x2cd4b4, 0x52b250, 0x3cd558, 0x60b540, 0x4ab5a0, 0x3755a6,
	0x5c95b0, 0x4649b0, 0x30a974, 0x56a4b0, 0x40aa50, 0x29aa52, 0x4e6d20, 0x39ad47, 0x5eab60, 0x489370,
	0x344af5, 0x5a4970, 0x4464b0, 0x2c74a3, 0x50ea50, 0x3d6a58, 0x6256a0, 0x4aaad0, 0x3696d5, 0x5c92e0
); /* Years 1900-1999 */
var TK21 = new Array(
	0x46c960, 0x2ed954, 0x54d4a0, 0x3eda50, 0x2a7552, 0x4e56a0, 0x38a7a7, 0x5ea5d0, 0x4a92b0, 0x32aab5,
	0x58a950, 0x42b4a0, 0x2cbaa4, 0x50ad50, 0x3c55d9, 0x624ba0, 0x4ca5b0, 0x375176, 0x5c5270, 0x466930,
	0x307934, 0x546aa0, 0x3ead50, 0x2a5b52, 0x504b60, 0x38a6e6, 0x5ea4e0, 0x48d260, 0x32ea65, 0x56d520,
	0x40daa0, 0x2d56a3, 0x5256d0, 0x3c4afb, 0x6249d0, 0x4ca4d0, 0x37d0b6, 0x5ab250, 0x44b520, 0x2edd25,
	0x54b5a0, 0x3e55d0, 0x2a55b2, 0x5049b0, 0x3aa577, 0x5ea4b0, 0x48aa50, 0x33b255, 0x586d20, 0x40ad60,
	0x2d4b63, 0x525370, 0x3e49e8, 0x60c970, 0x4c54b0, 0x3768a6, 0x5ada50, 0x445aa0, 0x2fa6a4, 0x54aad0,
	0x4052e0, 0x28d2e3, 0x4ec950, 0x38d557, 0x5ed4a0, 0x46d950, 0x325d55, 0x5856a0, 0x42a6d0, 0x2c55d4,
	0x5252b0, 0x3ca9b8, 0x62a930, 0x4ab490, 0x34b6a6, 0x5aad50, 0x4655a0, 0x2eab64, 0x54a570, 0x4052b0,
	0x2ab173, 0x4e6930, 0x386b37, 0x5e6aa0, 0x48ad50, 0x332ad5, 0x582b60, 0x42a570, 0x2e52e4, 0x50d160,
	0x3ae958, 0x60d520, 0x4ada90, 0x355aa6, 0x5a56d0, 0x462ae0, 0x30a9d4, 0x54a2d0, 0x3ed150, 0x28e952
); /* Years 2000-2099 */
var TK22 = new Array(
	0x4eb520, 0x38d727, 0x5eada0, 0x4a55b0, 0x362db5, 0x5a45b0, 0x44a2b0, 0x2eb2b4, 0x54a950, 0x3cb559,
	0x626b20, 0x4cad50, 0x385766, 0x5c5370, 0x484570, 0x326574, 0x5852b0, 0x406950, 0x2a7953, 0x505aa0,
	0x3baaa7, 0x5ea6d0, 0x4a4ae0, 0x35a2e5, 0x5aa550, 0x42d2a0, 0x2de2a4, 0x52d550, 0x3e5abb, 0x6256a0,
	0x4c96d0, 0x3949b6, 0x5e4ab0, 0x46a8d0, 0x30d4b5, 0x56b290, 0x40b550, 0x2a6d52, 0x504da0, 0x3b9567,
	0x609570, 0x4a49b0, 0x34a975, 0x5a64b0, 0x446a90, 0x2cba94, 0x526b50, 0x3e2b60, 0x28ab61, 0x4c9570,
	0x384ae6, 0x5cd160, 0x46e4a0, 0x2eed25, 0x54da90, 0x405b50, 0x2c36d3, 0x502ae0, 0x3a93d7, 0x6092d0,
	0x4ac950, 0x32d556, 0x58b4a0, 0x42b690, 0x2e5d94, 0x5255b0, 0x3e25fa, 0x6425b0, 0x4e92b0, 0x36aab6,
	0x5c6950, 0x4674a0, 0x31b2a5, 0x54ad50, 0x4055a0, 0x2aab73, 0x522570, 0x3a5377, 0x6052b0, 0x4a6950,
	0x346d56, 0x585aa0, 0x42ab50, 0x2e56d4, 0x544ae0, 0x3ca570, 0x2864d2, 0x4cd260, 0x36eaa6, 0x5ad550,
	0x465aa0, 0x30ada5, 0x5695d0, 0x404ad0, 0x2aa9b3, 0x50a4d0, 0x3ad2b7, 0x5eb250, 0x48b540, 0x33d556
); /* Years 2100-2199 */
var CAN = new Array("Gi\341p", "Ất", "B\355nh", "Đinh", "Mậu", "Kỷ", "Canh", "T\342n", "Nh\342m", "Qu\375");
var CHI = new Array("T\375", "Sửu", "Dần", "M\343o", "Th\354n", "Tỵ", "Ngọ", "M\371i", "Th\342n", "Dậu", "Tuất", "Hợi");
var TUAN = new Array("Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ s\341u", "Thứ bảy");
var GIO_HD = new Array("110100101100", "001101001011", "110011010010", "101100110100", "001011001101", "010010110011");
var TIETKHI = new Array("Xuân phân", "Thanh minh", "Cốc vũ", "Lập hạ", "Tiểu mãn", "Mang chủng",
	"Hạ chí", "Tiểu thử", "Đại thử", "Lập thu", "Xử thử", "Bạch lộ",
	"Thu phân", "Hàn lộ", "Sương giáng", "Lập đông", "Tiểu tuyết", "Đại tuyết",
	"Đông chí", "Tiểu hàn", "Đại hàn", "Lập xuân", "Vũ Thủy", "Kinh trập"
);
/* Create lunar date object, stores (lunar) date, month, year, leap month indicator, and Julian date number */
function LunarDate(dd, mm, yy, leap, jd, length) {
	this.day = dd;
	this.month = mm;
	this.year = yy;
	this.leap = leap;
	this.jd = jd;
	this.length = length;
}
var PI = Math.PI;
/* Discard the fractional part of a number, e.g., INT(3.2) = 3 */
function INT(d) {
	return Math.floor(d);
}

function jdn(dd, mm, yy) {
	var a = INT((14 - mm) / 12);
	var y = yy + 4800 - a;
	var m = mm + 12 * a - 3;
	var jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - INT(y / 100) + INT(y / 400) - 32045;
	return jd;
}

function decodeLunarYear(yy, k) {
	var monthLengths, regularMonths, offsetOfTet, leapMonth, leapMonthLength, solarNY, currentJD, j, mm;
	var ly = new Array();
	monthLengths = new Array(29, 30);
	regularMonths = new Array(12);
	offsetOfTet = k >> 17;
	leapMonth = k & 0xf;
	leapMonthLength = monthLengths[k >> 16 & 0x1];
	solarNY = jdn(1, 1, yy);
	currentJD = solarNY + offsetOfTet;
	j = k >> 4;
	for(i = 0; i < 12; i++) {
		regularMonths[12 - i - 1] = monthLengths[j & 0x1];
		j >>= 1;
	}
	if(leapMonth == 0) {
		for(mm = 1; mm <= 12; mm++) {
			ly.push(new LunarDate(1, mm, yy, 0, currentJD, regularMonths[mm - 1]));
			currentJD += regularMonths[mm - 1];
		}
	} else {
		for(mm = 1; mm <= leapMonth; mm++) {
			ly.push(new LunarDate(1, mm, yy, 0, currentJD, regularMonths[mm - 1]));
			currentJD += regularMonths[mm - 1];
		}
		ly.push(new LunarDate(1, leapMonth, yy, 1, currentJD, leapMonthLength));
		currentJD += leapMonthLength;
		for(mm = leapMonth + 1; mm <= 12; mm++) {
			ly.push(new LunarDate(1, mm, yy, 0, currentJD, regularMonths[mm - 1]));
			currentJD += regularMonths[mm - 1];
		}
	}
	return ly;
}

function getYearInfo(yyyy) {
	var yearCode;
	if(yyyy < 1900) {
		yearCode = TK19[yyyy - 1800];
	} else if(yyyy < 2000) {
		yearCode = TK20[yyyy - 1900];
	} else if(yyyy < 2100) {
		yearCode = TK21[yyyy - 2000];
	} else {
		yearCode = TK22[yyyy - 2100];
	}
	return decodeLunarYear(yyyy, yearCode);
}
var FIRST_DAY = jdn(25, 1, 1800); // Tet am lich 1800
var LAST_DAY = jdn(31, 12, 2199);

function findLunarDate(jd, ly) {
	if(jd > LAST_DAY || jd < FIRST_DAY || ly[0].jd > jd) {
		return new LunarDate(0, 0, 0, 0, jd, 0);
	}
	var i = ly.length - 1;
	while(jd < ly[i].jd) {
		i--;
	}
	var off = jd - ly[i].jd;
	ret = new LunarDate(ly[i].day + off, ly[i].month, ly[i].year, ly[i].leap, jd, ly[i].length);
	return ret;
}

function getLunarDate(dd, mm, yyyy) {
	var ly, jd;
	ly = getYearInfo(yyyy);
	jd = jdn(dd, mm, yyyy);
	if(jd < ly[0].jd) {
		ly = getYearInfo(yyyy - 1);
	}
	return findLunarDate(jd, ly);
}
/* Compute the longitude of the sun at any time.
 * Parameter: floating number jdn, the number of days since 1/1/4713 BC noon
 * Algorithm from: "Astronomical Algorithms" by Jean Meeus, 1998
 */
function SunLongitude(jdn) {
	var T, T2, dr, M, L0, DL, lambda, theta, omega;
	T = (jdn - 2451545.0) / 36525; // Time in Julian centuries from 2000-01-01 12:00:00 GMT
	T2 = T * T;
	dr = PI / 180; // degree to radian
	M = 357.52910 + 35999.05030 * T - 0.0001559 * T2 - 0.00000048 * T * T2; // mean anomaly, degree
	L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2; // mean longitude, degree
	DL = (1.914600 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
	DL = DL + (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.000290 * Math.sin(dr * 3 * M);
	theta = L0 + DL; // true longitude, degree
	// obtain apparent longitude by correcting for nutation and aberration
	omega = 125.04 - 1934.136 * T;
	lambda = theta - 0.00569 - 0.00478 * Math.sin(omega * dr);
	// Convert to radians
	lambda = lambda * dr;
	lambda = lambda - PI * 2 * (INT(lambda / (PI * 2))); // Normalize to (0, 2*PI)
	return lambda;
}

function getSolarTerm(dayNumber, timeZone) {
	return INT(SunLongitude(dayNumber - 0.5 - timeZone / 24.0) / PI * 12);
}

function getYearCanChi(year) {
	return CAN[(year + 6) % 10] + " " + CHI[(year + 8) % 12];
}
/*
 * Can cua gio Chinh Ty (00:00) cua ngay voi JDN nay
 */
function getCanHour0(jdn) {
	return CAN[(jdn - 1) * 2 % 10];
}

function getGioHoangDao(jd) {
	var chiOfDay = (jd + 1) % 12;
	var gioHD = GIO_HD[chiOfDay % 6]; // same values for Ty' (1) and Ngo. (6), for Suu and Mui etc.
	var ret = "";
	var count = 0;
	for(var i = 0; i < 12; i++) {
		if(gioHD.charAt(i) == '1') {
			ret += CHI[i];
			ret += ' (' + (i * 2 + 23) % 24 + '-' + (i * 2 + 1) % 24 + ')';
			if(count++ < 5) ret += ', ';
			if(count == 3) ret += '\n';
		}
	}
	return ret;
}

function YearlyEvent(dd, mm, info) {
	this.day = dd;
	this.month = mm;
	this.info = info;
}
var YEARLY_EVENTS = new Array(
	new YearlyEvent(1, 1, 'Tết Nguyên Đán'),
	new YearlyEvent(15, 1, 'Rằm tháng Giêng'),
	new YearlyEvent(10, 3, 'Giỗ Tổ Hùng Vương (10/3 ÂL)'),
	new YearlyEvent(15, 4, 'Phật Đản (15/4 ÂL)'),
	new YearlyEvent(5, 5, 'Lễ Đoan Ngọ (5/5 ÂL)'),
	new YearlyEvent(15, 7, 'Vu Lan (15/7 ÂL)'),
	new YearlyEvent(15, 8, 'Tết Trung Thu (Rằm tháng 8)'),
	new YearlyEvent(23, 12, 'Ông Táo chầu trời (23/12 ÂL)')
);

function findEvents(dd, mm) {
	var ret = new Array();
	for(var i = 0; i < YEARLY_EVENTS.length; i++) {
		evt = YEARLY_EVENTS[i];
		if(evt.day == dd && evt.month == mm) {
			ret.push(evt);
		}
	}
	return ret;
}

function getDayInfo(dd, mm) {
	var events = findEvents(dd, mm);
	var ret = '';
	for(var i = 0; i < events.length; i++) {
		ret += events[i].info + ' ';
	}
	ret += '&nbsp;';
	return ret;
}
/////Tên Quẻ + Lục Thân + Chi + Thế Ứng
function $TenQue(hao1, hao2, hao3, hao4, hao5, hao6) {
	var lt1, lt2, lt3, lt4, lt5, lt6, c1, c2, c3, c4, c5, c6, nh, pt1, pt2, pt3, pt4, pt5, pt6, tu1, tu2, tu3, tu4, tu5, tu6;
	var tenque;
	pt1 = '';
	pt2 = '';
	pt3 = '';
	pt4 = '';
	pt5 = '';
	pt6 = '';
	tu1 = '';
	tu2 = '';
	tu3 = '';
	tu4 = '';
	tu5 = '';
	tu6 = '';
	tuongque = '';
	cung = '';
	if(hao1 == 0 && hao2 == 0 && hao3 == 0 && hao4 == 0 && hao5 == 0 && hao6 == 0) {
		tenque = 'Thuần Khôn';
		lt1 = 'Huynh Đệ';
		lt2 = 'Phụ Mẫu';
		lt3 = 'Quan Quỹ';
		lt4 = 'Huynh Đệ';
		lt5 = 'Thê Tài';
		lt6 = 'Tử Tôn';
		c1 = "A.Mùi";
		c2 = "A.Tị";
		c3 = "A.Mão";
		c4 = "Q.Sửu";
		c5 = "Q.Hợi";
		c6 = "Q.Dậu";
		nh = "tho";
		tu3 = '(Ư)';
		tu6 = '(T)';
		tuongque = ' - LX';
		cung = 'Khôn';
	}
	if(hao1 == 1 && hao2 == 1 && hao3 == 1 && hao4 == 0 && hao5 == 0 && hao6 == 0) {
		tenque = 'Địa Thiên Thái';
		lt1 = 'Thê Tài';
		lt2 = 'Quan Quỹ';
		lt3 = 'Huynh Đệ';
		lt4 = 'Huynh Đệ';
		lt5 = 'Thê Tài';
		lt6 = 'Tử Tôn';
		c1 = "G.Tý";
		c2 = "G.Dần";
		c3 = "G.Thìn";
		c4 = "Q.Sửu";
		c5 = "Q.Hợi";
		c6 = "Q.Dậu";
		nh = "tho";
		pt2 = 'Phụ-Tị';
		tu3 = '(T)';
		tu6 = '(Ư)';
		tuongque = ' - LH';
		cung = 'Khôn';
	}
	if(hao1 == 1 && hao2 == 1 && hao3 == 0 && hao4 == 0 && hao5 == 0 && hao6 == 0) {
		tenque = 'Địa Trạch Lâm';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Quan Quỹ';
		lt3 = 'Huynh Đệ';
		lt4 = 'Huynh Đệ';
		lt5 = 'Thê Tài';
		lt6 = 'Tử Tôn';
		c1 = "Đ.Tị";
		c2 = "Đ.Mão";
		c3 = "Đ.Sửu";
		c4 = "Q.Sửu";
		c5 = "Q.Hợi";
		c6 = "Q.Dậu";
		nh = "tho";
		tu2 = '(T)';
		tu5 = '(Ư)';
		tuongque = '';
		cung = 'Khôn';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 1 && hao4 == 0 && hao5 == 0 && hao6 == 0) {
		tenque = 'Địa Hỏa Minh Di';
		lt1 = 'Tử Tôn';
		lt2 = 'Quan Quỹ';
		lt3 = 'Huynh Đệ';
		lt4 = 'Quan Quỹ';
		lt5 = 'Huynh Đệ';
		lt6 = 'Phụ Mẫu';
		c1 = "K.Mão";
		c2 = "K.Sửu";
		c3 = "K.Hợi";
		c4 = "Q.Sửu";
		c5 = "Q.Hợi";
		c6 = "Q.Dậu";
		nh = "thuy";
		pt3 = 'Tài-Ngọ';
		tu1 = '(Ư)';
		tu4 = '(T)';
		tuongque = ' - DH';
		cung = 'Khảm';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 0 && hao4 == 0 && hao5 == 0 && hao6 == 0) {
		tenque = 'Địa Lôi Phục';
		lt1 = 'Thê Tài';
		lt2 = 'Quan Quỹ';
		lt3 = 'Huynh Đệ';
		lt4 = 'Huynh Đệ';
		lt5 = 'Thê Tài';
		lt6 = 'Tử Tôn';
		c1 = "C.Tý";
		c2 = "C.Dần";
		c3 = "C.Thìn";
		c4 = "Q.Sửu";
		c5 = "Q.Hợi";
		c6 = "Q.Dậu";
		nh = "tho";
		pt2 = 'Phụ-Tị';
		tu1 = '(T)';
		tu4 = '(Ư)';
		tuongque = ' - LH';
		cung = 'Khôn';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 1 && hao4 == 0 && hao5 == 0 && hao6 == 0) {
		tenque = 'Địa Phong Thăng';
		lt1 = 'Thê Tài';
		lt2 = 'Phụ Mẫu';
		lt3 = 'Quan Quỹ';
		lt4 = 'Thê Tài';
		lt5 = 'Phụ Mẫu';
		lt6 = 'Quan Quỹ';
		c1 = "T.Sửu";
		c2 = "T.Hợi";
		c3 = "T.Dậu";
		c4 = "Q.Sửu";
		c5 = "Q.Hợi";
		c6 = "Q.Dậu";
		nh = "moc";
		pt2 = 'Đệ-Dần';
		pt4 = 'Tử-Ngọ';
		tu1 = '(Ư)';
		tu4 = '(T)';
		tuongque = '';
		cung = 'Chấn';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 0 && hao4 == 0 && hao5 == 0 && hao6 == 0) {
		tenque = 'Địa Thủy Sư';
		lt1 = 'Tử Tôn';
		lt2 = 'Quan Quỹ';
		lt3 = 'Thê Tài';
		lt4 = 'Quan Quỹ';
		lt5 = 'Huynh Đệ';
		lt6 = 'Phụ Mẫu';
		c1 = "M.Dần";
		c2 = "M.Thìn";
		c3 = "M.Ngọ";
		c4 = "Q.Sửu";
		c5 = "Q.Hợi";
		c6 = "Q.Dậu";
		nh = "thuy";
		tu3 = '(T)';
		tu6 = '(Ư)';
		tuongque = ' - QH';
		cung = 'Khảm';
	}
	if(hao1 == 0 && hao2 == 0 && hao3 == 1 && hao4 == 0 && hao5 == 0 && hao6 == 0) {
		tenque = 'Địa Sơn Khiêm';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Quan Quỹ';
		lt3 = 'Huynh Đệ';
		lt4 = 'Phụ Mẫu';
		lt5 = 'Tử Tôn';
		lt6 = 'Huynh Đệ';
		c1 = "B.Thìn";
		c2 = "B.Ngọ";
		c3 = "B.Thân";
		c4 = "Q.Sửu";
		c5 = "Q.Hợi";
		c6 = "Q.Dậu";
		nh = "kim";
		pt2 = 'Tài-Mão';
		tu2 = '(Ư)';
		tu5 = '(T)';
		tuongque = '';
		cung = 'Đoài';
	}
	//////Thượng Quái Càn
	if(hao1 == 0 && hao2 == 0 && hao3 == 0 && hao4 == 1 && hao5 == 1 && hao6 == 1) {
		tenque = 'Thiên Địa Bĩ';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Quan Quỹ';
		lt3 = 'Thê Tài';
		lt4 = 'Quan Quỹ';
		lt5 = 'Huynh Đệ';
		lt6 = 'Phụ Mẫu';
		c1 = "A.Mùi";
		c2 = "A.Tị";
		c3 = "A.Mão";
		c4 = "N.Ngọ";
		c5 = "N.Thân";
		c6 = "N.Tuất";
		nh = "kim";
		pt1 = 'Tử-Tý';
		tu3 = '(T)';
		tu6 = '(Ư)';
		tuongque = ' - LH';
		cung = 'Càn';
	}
	if(hao1 == 1 && hao2 == 1 && hao3 == 1 && hao4 == 1 && hao5 == 1 && hao6 == 1) {
		tenque = 'Thuần Càn';
		lt1 = 'Tử Tôn';
		lt2 = 'Thê Tài';
		lt3 = 'Phụ Mẫu';
		lt4 = 'Quan Quỹ';
		lt5 = 'Huynh Đệ';
		lt6 = 'Phụ Mẫu';
		c1 = "G.Tý";
		c2 = "G.Dần";
		c3 = "G.Thìn";
		c4 = "N.Ngọ";
		c5 = "N.Thân";
		c6 = "N.Tuất";
		nh = "kim";
		tu3 = '(Ư)';
		tu6 = '(T)';
		tuongque = ' - LX';
		cung = 'Càn';
	}
	if(hao1 == 1 && hao2 == 1 && hao3 == 0 && hao4 == 1 && hao5 == 1 && hao6 == 1) {
		tenque = 'Thiên Trạch Lý';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Quan Quỹ';
		lt3 = 'Huynh Đệ';
		lt4 = 'Phụ Mẫu';
		lt5 = 'Tử Tôn';
		lt6 = 'Huynh Đệ';
		c1 = "Đ.Tị";
		c2 = "Đ.Mão";
		c3 = "Đ.Sửu";
		c4 = "N.Ngọ";
		c5 = "N.Thân";
		c6 = "N.Tuất";
		nh = "tho";
		pt5 = 'Tài-Tý';
		tu2 = '(Ư)';
		tu5 = '(T)';
		tuongque = '';
		cung = 'Cấn';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 1 && hao4 == 1 && hao5 == 1 && hao6 == 1) {
		tenque = 'Thiên Hỏa Đồng Nhân';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Tử Tôn';
		lt3 = 'Quan Quỹ';
		lt4 = 'Huynh Đệ';
		lt5 = 'Thê Tài';
		lt6 = 'Tử Tôn';
		c1 = "K.Mão";
		c2 = "K.Sửu";
		c3 = "K.Hợi";
		c4 = "N.Ngọ";
		c5 = "N.Thân";
		c6 = "N.Tuất";
		nh = "hoa";
		tu3 = '(T)';
		tu6 = '(Ư)';
		tuongque = ' - QH';
		cung = 'Ly';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 0 && hao4 == 1 && hao5 == 1 && hao6 == 1) {
		tenque = 'Thiên Lôi Vô Vọng';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Huynh Đệ';
		lt3 = 'Thê Tài';
		lt4 = 'Tử Tôn';
		lt5 = 'Quan Quỹ';
		lt6 = 'Thê Tài';
		c1 = "C.Tý";
		c2 = "C.Dần";
		c3 = "C.Thìn";
		c4 = "N.Ngọ";
		c5 = "N.Thân";
		c6 = "N.Tuất";
		nh = "moc";
		tu1 = '(Ư)';
		tu4 = '(T)';
		tuongque = ' - LX';
		cung = 'Tốn';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 1 && hao4 == 1 && hao5 == 1 && hao6 == 1) {
		tenque = 'Thiên Phong Cấu';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Tử Tôn';
		lt3 = 'Huynh Đệ';
		lt4 = 'Quan Quỹ';
		lt5 = 'Huynh Đệ';
		lt6 = 'Phụ Mẫu';
		c1 = "T.Sửu";
		c2 = "T.Hợi";
		c3 = "T.Dậu";
		c4 = "N.Ngọ";
		c5 = "N.Thân";
		c6 = "N.Tuất";
		nh = "kim";
		pt2 = 'Tài-Dần';
		tu1 = '(T)';
		tu4 = '(Ư)';
		tuongque = '';
		cung = 'Càn';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 0 && hao4 == 1 && hao5 == 1 && hao6 == 1) {
		tenque = 'Thiên Thủy Tụng';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Tử Tôn';
		lt3 = 'Huynh Đệ';
		lt4 = 'Huynh Đệ';
		lt5 = 'Thê Tài';
		lt6 = 'Tử Tôn';
		c1 = "M.Dần";
		c2 = "M.Thìn";
		c3 = "M.Ngọ";
		c4 = "N.Ngọ";
		c5 = "N.Thân";
		c6 = "N.Tuất";
		nh = "hoa";
		pt3 = 'Quan-Hợi';
		tu1 = '(Ư)';
		tu4 = '(T)';
		tuongque = ' - DH';
		cung = 'Ly';
	}
	if(hao1 == 0 && hao2 == 0 && hao3 == 1 && hao4 == 1 && hao5 == 1 && hao6 == 1) {
		tenque = 'Thiên Sơn Độn';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Quan Quỹ';
		lt3 = 'Huynh Đệ';
		lt4 = 'Quan Quỹ';
		lt5 = 'Huynh Đệ';
		lt6 = 'Phụ Mẫu';
		c1 = "B.Thìn";
		c2 = "B.Ngọ";
		c3 = "B.Thân";
		c4 = "N.Ngọ";
		c5 = "N.Thân";
		c6 = "N.Tuất";
		nh = "kim";
		pt1 = 'Tử-Tý';
		pt2 = 'Tài-Dần';
		tu2 = '(T)';
		tu5 = '(Ư)';
		tuongque = '';
		cung = 'Càn';
	}
	//////Thượng Quái Đoài
	if(hao1 == 0 && hao2 == 0 && hao3 == 0 && hao4 == 1 && hao5 == 1 && hao6 == 0) {
		tenque = 'Trạch Địa Tụy';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Quan Quỹ';
		lt3 = 'Thê Tài';
		lt4 = 'Tử Tôn';
		lt5 = 'Huynh Đệ';
		lt6 = 'Phụ Mẫu';
		c1 = "A.Mùi";
		c2 = "A.Tị";
		c3 = "A.Mão";
		c4 = "Đ.Hợi";
		c5 = "Đ.Dậu";
		c6 = "Đ.Mùi";
		nh = "kim";
		tu2 = '(T)';
		tu5 = '(Ư)';
		tuongque = '';
		cung = 'Đoài';
	}
	if(hao1 == 1 && hao2 == 1 && hao3 == 1 && hao4 == 1 && hao5 == 1 && hao6 == 0) {
		tenque = 'Trạch Thiên Quải';
		lt1 = 'Thê Tài';
		lt2 = 'Quan Quỹ';
		lt3 = 'Huynh Đệ';
		lt4 = 'Thê Tài';
		lt5 = 'Tử Tôn';
		lt6 = 'Huynh Đệ';
		c1 = "G.Tý";
		c2 = "G.Dần";
		c3 = "G.Thìn";
		c4 = "Đ.Hợi";
		c5 = "Đ.Dậu";
		c6 = "Đ.Mùi";
		nh = "tho";
		pt2 = 'Phụ-Tị';
		tu2 = '(Ư)';
		tu5 = '(T)';
		tuongque = '';
		cung = 'Khôn';
	}
	if(hao1 == 1 && hao2 == 1 && hao3 == 0 && hao4 == 1 && hao5 == 1 && hao6 == 0) {
		tenque = 'Thuần Đoài';
		lt1 = 'Quan Quỹ';
		lt2 = 'Thê Tài';
		lt3 = 'Phụ Mẫu';
		lt4 = 'Tử Tôn';
		lt5 = 'Huynh Đệ';
		lt6 = 'Phụ Mẫu';
		c1 = "Đ.Tị";
		c2 = "Đ.Mão";
		c3 = "Đ.Sửu";
		c4 = "Đ.Hợi";
		c5 = "Đ.Dậu";
		c6 = "Đ.Mùi";
		nh = "kim";
		tu3 = '(Ư)';
		tu6 = '(T)';
		tuongque = ' - LX';
		cung = 'Đoài';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 1 && hao4 == 1 && hao5 == 1 && hao6 == 0) {
		tenque = 'Trạch Hỏa Cách';
		lt1 = 'Tử Tôn';
		lt2 = 'Quan Quỹ';
		lt3 = 'Huynh Đệ';
		lt4 = 'Huynh Đệ';
		lt5 = 'Phụ Mẫu';
		lt6 = 'Quan Quỹ';
		c1 = "K.Mão";
		c2 = "K.Sửu";
		c3 = "K.Hợi";
		c4 = "Đ.Hợi";
		c5 = "Đ.Dậu";
		c6 = "Đ.Mùi";
		nh = "thuy";
		pt3 = 'Tài-Ngọ';
		tu1 = '(Ư)';
		tu4 = '(T)';
		tuongque = '';
		cung = 'Khảm';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 0 && hao4 == 1 && hao5 == 1 && hao6 == 0) {
		tenque = 'Trạch Lôi Tùy';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Huynh Đệ';
		lt3 = 'Thê Tài';
		lt4 = 'Phụ Mẫu';
		lt5 = 'Quan Quỹ';
		lt6 = 'Thê Tài';
		c1 = "C.Tý";
		c2 = "C.Dần";
		c3 = "C.Thìn";
		c4 = "Đ.Hợi";
		c5 = "Đ.Dậu";
		c6 = "Đ.Mùi";
		nh = "moc";
		pt4 = 'Tử-Ngọ';
		tu3 = '(T)';
		tu6 = '(Ư)';
		tuongque = ' - QH';
		cung = 'Chấn';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 1 && hao4 == 1 && hao5 == 1 && hao6 == 0) {
		tenque = 'Trạch Phong Đại Quá';
		lt1 = 'Thê Tài';
		lt2 = 'Phụ Mẫu';
		lt3 = 'Quan Quỹ';
		lt4 = 'Phụ Mẫu';
		lt5 = 'Quan Quỹ';
		lt6 = 'Thê Tài';
		c1 = "T.Sửu";
		c2 = "T.Hợi";
		c3 = "T.Dậu";
		c4 = "Đ.Hợi";
		c5 = "Đ.Dậu";
		c6 = "Đ.Mùi";
		nh = "moc";
		pt2 = 'Đệ-Dần';
		pt4 = 'Tử-Ngọ';
		tu1 = '(Ư)';
		tu4 = '(T)';
		tuongque = ' - DH';
		cung = 'Chấn';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 0 && hao4 == 1 && hao5 == 1 && hao6 == 0) {
		tenque = 'Trạch Thủy Khốn';
		lt1 = 'Thê Tài';
		lt2 = 'Phụ Mẫu';
		lt3 = 'Quan Quỹ';
		lt4 = 'Tử Tôn';
		lt5 = 'Huynh Đệ';
		lt6 = 'Phụ Mẫu';
		c1 = "M.Dần";
		c2 = "M.Thìn";
		c3 = "M.Ngọ";
		c4 = "Đ.Hợi";
		c5 = "Đ.Dậu";
		c6 = "Đ.Mùi";
		nh = "kim";
		tu1 = '(T)';
		tu4 = '(Ư)';
		tuongque = ' - LH';
		cung = 'Đoài';
	}
	if(hao1 == 0 && hao2 == 0 && hao3 == 1 && hao4 == 1 && hao5 == 1 && hao6 == 0) {
		tenque = 'Trạch Sơn Hàm';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Quan Quỹ';
		lt3 = 'Huynh Đệ';
		lt4 = 'Tử Tôn';
		lt5 = 'Huynh Đệ';
		lt6 = 'Phụ Mẫu';
		c1 = "B.Thìn";
		c2 = "B.Ngọ";
		c3 = "B.Thân";
		c4 = "Đ.Hợi";
		c5 = "Đ.Dậu";
		c6 = "Đ.Mùi";
		nh = "kim";
		pt2 = 'Tài-Mão';
		tu3 = '(T)';
		tu6 = '(Ư)';
		tuongque = '';
		cung = 'Đoài';
	}
	//////Thượng Quái Ly
	if(hao1 == 0 && hao2 == 0 && hao3 == 0 && hao4 == 1 && hao5 == 0 && hao6 == 1) {
		tenque = 'Hỏa Địa Tấn';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Quan Quỹ';
		lt3 = 'Thê Tài';
		lt4 = 'Huynh Đệ';
		lt5 = 'Phụ Mẫu';
		lt6 = 'Quan Quỹ';
		c1 = "A.Mùi";
		c2 = "A.Tị";
		c3 = "A.Mão";
		c4 = "K.Dậu";
		c5 = "K.Mùi";
		c6 = "K.Tị";
		nh = "kim";
		pt1 = 'Tử-Tý';
		tu1 = '(Ư)';
		tu4 = '(T)';
		tuongque = ' - DH';
		cung = 'Càn';
	}
	if(hao1 == 1 && hao2 == 1 && hao3 == 1 && hao4 == 1 && hao5 == 0 && hao6 == 1) {
		tenque = 'Hỏa Thiên Đại Hữu';
		lt1 = 'Tử Tôn';
		lt2 = 'Thê Tài';
		lt3 = 'Phụ Mẫu';
		lt4 = 'Huynh Đệ';
		lt5 = 'Phụ Mẫu';
		lt6 = 'Quan Quỹ';
		c1 = "G.Tý";
		c2 = "G.Dần";
		c3 = "G.Thìn";
		c4 = "K.Dậu";
		c5 = "K.Mùi";
		c6 = "K.Tị";
		nh = "kim";
		tu3 = '(T)';
		tu6 = '(Ư)';
		tuongque = ' - QH';
		cung = 'Càn';
	}
	if(hao1 == 1 && hao2 == 1 && hao3 == 0 && hao4 == 1 && hao5 == 0 && hao6 == 1) {
		tenque = 'Hỏa Trạch Khuê';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Quan Quỹ';
		lt3 = 'Huynh Đệ';
		lt4 = 'Tử Tôn';
		lt5 = 'Huynh Đệ';
		lt6 = 'Phụ Mẫu';
		c1 = "Đ.Tị";
		c2 = "Đ.Mão";
		c3 = "Đ.Sửu";
		c4 = "K.Dậu";
		c5 = "K.Mùi";
		c6 = "K.Tị";
		nh = "tho";
		pt5 = 'Tài-Tý';
		tu1 = '(Ư)';
		tu4 = '(T)';
		tuongque = '';
		cung = 'Cấn';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 1 && hao4 == 1 && hao5 == 0 && hao6 == 1) {
		tenque = 'Thuần Ly';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Tử Tôn';
		lt3 = 'Quan Quỹ';
		lt4 = 'Thê Tài';
		lt5 = 'Tử Tôn';
		lt6 = 'Huynh Đệ';
		c1 = "K.Mão";
		c2 = "K.Sửu";
		c3 = "K.Hợi";
		c4 = "K.Dậu";
		c5 = "K.Mùi";
		c6 = "K.Tị";
		nh = "hoa";
		tu3 = '(Ư)';
		tu6 = '(T)';
		tuongque = ' - LX';
		cung = 'Ly';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 0 && hao4 == 1 && hao5 == 0 && hao6 == 1) {
		tenque = 'Hỏa Lôi Phệ Hạp';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Huynh Đệ';
		lt3 = 'Thê Tài';
		lt4 = 'Quan Quỹ';
		lt5 = 'Thê Tài';
		lt6 = 'Tử Tôn';
		c1 = "C.Tý";
		c2 = "C.Dần";
		c3 = "C.Thìn";
		c4 = "K.Dậu";
		c5 = "K.Mùi";
		c6 = "K.Tị";
		nh = "moc";
		tu2 = '(Ư)';
		tu5 = '(T)';
		tuongque = '';
		cung = 'Tốn';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 1 && hao4 == 1 && hao5 == 0 && hao6 == 1) {
		tenque = 'Hỏa Phong Đỉnh';
		lt1 = 'Tử Tôn';
		lt2 = 'Quan Quỹ';
		lt3 = 'Thê Tài';
		lt4 = 'Thê Tài';
		lt5 = 'Tử Tôn';
		lt6 = 'Huynh Đệ';
		c1 = "T.Sửu";
		c2 = "T.Hợi";
		c3 = "T.Dậu";
		c4 = "K.Dậu";
		c5 = "K.Mùi";
		c6 = "K.Tị";
		nh = "hoa";
		pt1 = 'Phụ-Mão';
		tu2 = '(T)';
		tu5 = '(Ư)';
		tuongque = '';
		cung = 'Ly';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 0 && hao4 == 1 && hao5 == 0 && hao6 == 1) {
		tenque = 'Hỏa Thủy Vị Tế';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Tử Tôn';
		lt3 = 'Huynh Đệ';
		lt4 = 'Thê Tài';
		lt5 = 'Tử Tôn';
		lt6 = 'Huynh Đệ';
		c1 = "M.Dần";
		c2 = "M.Thìn";
		c3 = "M.Ngọ";
		c4 = "K.Dậu";
		c5 = "K.Mùi";
		c6 = "K.Tị";
		nh = "hoa";
		pt3 = 'Quan-Hợi';
		tu3 = '(T)';
		tu6 = '(Ư)';
		tuongque = '';
		cung = 'Ly';
	}
	if(hao1 == 0 && hao2 == 0 && hao3 == 1 && hao4 == 1 && hao5 == 0 && hao6 == 1) {
		tenque = 'Hỏa Sơn Lữ';
		lt1 = 'Tử Tôn';
		lt2 = 'Huynh Đệ';
		lt3 = 'Thê Tài';
		lt4 = 'Thê Tài';
		lt5 = 'Tử Tôn';
		lt6 = 'Huynh Đệ';
		c1 = "B.Thìn";
		c2 = "B.Ngọ";
		c3 = "B.Thân";
		c4 = "K.Dậu";
		c5 = "K.Mùi";
		c6 = "K.Tị";
		nh = "hoa";
		pt1 = 'Phụ-Mão';
		pt3 = 'Quan-Hợi';
		tu1 = '(T)';
		tu4 = '(Ư)';
		tuongque = ' - LH';
		cung = 'Ly';
	}
	//////Thượng Quái Chấn
	if(hao1 == 0 && hao2 == 0 && hao3 == 0 && hao4 == 1 && hao5 == 0 && hao6 == 0) {
		tenque = 'Lôi Địa Dự';
		lt1 = 'Thê Tài';
		lt2 = 'Tử Tôn';
		lt3 = 'Huynh Đệ';
		lt4 = 'Tử Tôn';
		lt5 = 'Quan Quỹ';
		lt6 = 'Thê Tài';
		c1 = "A.Mùi";
		c2 = "A.Tị";
		c3 = "A.Mão";
		c4 = "C.Ngọ";
		c5 = "C.Thân";
		c6 = "C.Tuất";
		nh = "moc";
		pt1 = 'Phụ-Tý';
		tu1 = '(T)';
		tu4 = '(Ư)';
		tuongque = ' - LH';
		cung = 'Chấn';
	}
	if(hao1 == 1 && hao2 == 1 && hao3 == 1 && hao4 == 1 && hao5 == 0 && hao6 == 0) {
		tenque = 'Lôi Thiên Đại Tráng';
		lt1 = 'Thê Tài';
		lt2 = 'Quan Quỹ';
		lt3 = 'Huynh Đệ';
		lt4 = 'Phụ Mẫu';
		lt5 = 'Tử Tôn';
		lt6 = 'Huynh Đệ';
		c1 = "G.Tý";
		c2 = "G.Dần";
		c3 = "G.Thìn";
		c4 = "C.Ngọ";
		c5 = "C.Thân";
		c6 = "C.Tuất";
		nh = "tho";
		tu1 = '(Ư)';
		tu4 = '(T)';
		tuongque = ' - LX';
		cung = 'Khôn';
	}
	if(hao1 == 1 && hao2 == 1 && hao3 == 0 && hao4 == 1 && hao5 == 0 && hao6 == 0) {
		tenque = 'Lôi Trạch Quy Muội';
		lt1 = 'Quan Quỹ';
		lt2 = 'Thê Tài';
		lt3 = 'Phụ Mẫu';
		lt4 = 'Quan Quỹ';
		lt5 = 'Huynh Đệ';
		lt6 = 'Phụ Mẫu';
		c1 = "Đ.Tị";
		c2 = "Đ.Mão";
		c3 = "D.Sửu";
		c4 = "C.Ngọ";
		c5 = "C.Thân";
		c6 = "C.Tuất";
		nh = "kim";
		pt4 = 'Tử-Hợi';
		tu3 = '(T)';
		tu6 = '(Ư)';
		tuongque = ' - QH';
		cung = 'Đoài';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 1 && hao4 == 1 && hao5 == 0 && hao6 == 0) {
		tenque = 'Lôi Hỏa Phong';
		lt1 = 'Tử Tôn';
		lt2 = 'Quan Quỹ';
		lt3 = 'Huynh Đệ';
		lt4 = 'Thê Tài';
		lt5 = 'Phụ Mẫu';
		lt6 = 'Quan Quỹ';
		c1 = "K.Mão";
		c2 = "K.Sửu";
		c3 = "K.Hợi";
		c4 = "C.Ngọ";
		c5 = "C.Thân";
		c6 = "C.Tuất";
		nh = "thuy";
		tu2 = '(Ư)';
		tu5 = '(T)';
		tuongque = '';
		cung = 'Khảm';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 0 && hao4 == 1 && hao5 == 0 && hao6 == 0) {
		tenque = 'Thuần Chấn';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Huynh Đệ';
		lt3 = 'Thê Tài';
		lt4 = 'Tử Tôn';
		lt5 = 'Quan Quỹ';
		lt6 = 'Thê Tài';
		c1 = "C.Tý";
		c2 = "C.Dần";
		c3 = "C.Thìn";
		c4 = "C.Ngọ";
		c5 = "C.Thân";
		c6 = "C.Tuất";
		nh = "moc";
		tu3 = '(Ư)';
		tu6 = '(T)';
		tuongque = ' - LX';
		cung = 'Chấn';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 1 && hao4 == 1 && hao5 == 0 && hao6 == 0) {
		tenque = 'Lôi Phong Hằng';
		lt1 = 'Thê Tài';
		lt2 = 'Phụ Mẫu';
		lt3 = 'Quan Quỹ';
		lt4 = 'Tử Tôn';
		lt5 = 'Quan Quỹ';
		lt6 = 'Thê Tài';
		c1 = "T.Sửu";
		c2 = "T.Hợi";
		c3 = "T.Dậu";
		c4 = "C.Ngọ";
		c5 = "C.Thân";
		c6 = "C.Tuất";
		nh = "moc";
		pt2 = 'Đệ-Dần';
		tu3 = '(T)';
		tu6 = '(Ư)';
		tuongque = '';
		cung = 'Chấn';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 0 && hao4 == 1 && hao5 == 0 && hao6 == 0) {
		tenque = 'Lôi Thủy Giải';
		lt1 = 'Huynh Đệ';
		lt2 = 'Thê Tài';
		lt3 = 'Tử Tôn';
		lt4 = 'Tử Tôn';
		lt5 = 'Quan Quỹ';
		lt6 = 'Thê Tài';
		c1 = "M.Dần";
		c2 = "M.Thìn";
		c3 = "M.Ngọ";
		c4 = "C.Ngọ";
		c5 = "C.Thân";
		c6 = "C.Tuất";
		nh = "moc";
		pt1 = 'Phụ-Tý';
		tu2 = '(T)';
		tu5 = '(Ư)';
		tuongque = '';
		cung = 'Chấn';
	}
	if(hao1 == 0 && hao2 == 0 && hao3 == 1 && hao4 == 1 && hao5 == 0 && hao6 == 0) {
		tenque = 'Lôi Sơn Tiểu Quá';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Quan Quỹ';
		lt3 = 'Huynh Đệ';
		lt4 = 'Quan Quỹ';
		lt5 = 'Huynh Đệ';
		lt6 = 'Phụ Mẫu';
		c1 = "B.Thìn";
		c2 = "B.Ngọ";
		c3 = "B.Thân";
		c4 = "C.Ngọ";
		c5 = "C.Thân";
		c6 = "C.Tuất";
		nh = "kim";
		pt2 = 'Tài-Mão';
		pt4 = 'Tử-Hợi';
		tu1 = '(Ư)';
		tu4 = '(T)';
		tuongque = ' - DH';
		cung = 'Đoài';
	}
	//////Thượng Quái Tốn
	if(hao1 == 0 && hao2 == 0 && hao3 == 0 && hao4 == 0 && hao5 == 1 && hao6 == 1) {
		tenque = 'Phong Địa Quán';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Quan Quỹ';
		lt3 = 'Thê Tài';
		lt4 = 'Phụ Mẫu';
		lt5 = 'Quan Quỹ';
		lt6 = 'Thê Tài';
		c1 = "A.Mùi";
		c2 = "A.Tị";
		c3 = "A.Mão";
		c4 = "T.Mùi";
		c5 = "T.Tị";
		c6 = "T.Mão";
		nh = "kim";
		pt1 = 'Tử-Tý';
		pt5 = 'Đệ-Thân';
		tu1 = '(Ư)';
		tu4 = '(T)';
		tuongque = '';
		cung = 'Càn';
	}
	if(hao1 == 1 && hao2 == 1 && hao3 == 1 && hao4 == 0 && hao5 == 1 && hao6 == 1) {
		tenque = 'Phong Thiên Tiểu Súc';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Huynh Đệ';
		lt3 = 'Thê Tài';
		lt4 = 'Thê Tài';
		lt5 = 'Tử Tôn';
		lt6 = 'Huynh Đệ';
		c1 = "G.Tý";
		c2 = "G.Dần";
		c3 = "G.Thìn";
		c4 = "T.Mùi";
		c5 = "T.Tị";
		c6 = "T.Mão";
		nh = "moc";
		pt3 = 'Quan-Dậu';
		tu1 = '(T)';
		tu4 = '(Ư)';
		tuongque = '';
		cung = 'Tốn';
	}
	if(hao1 == 1 && hao2 == 1 && hao3 == 0 && hao4 == 0 && hao5 == 1 && hao6 == 1) {
		tenque = 'Phong Trạch Trung Phu';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Quan Quỹ';
		lt3 = 'Huynh Đệ';
		lt4 = 'Huynh Đệ';
		lt5 = 'Phụ Mẫu';
		lt6 = 'Quan Quỹ';
		c1 = "Đ.Tị";
		c2 = "Đ.Mão";
		c3 = "Đ.Sửu";
		c4 = "T.Mùi";
		c5 = "T.Tị";
		c6 = "T.Mão";
		nh = "tho";
		pt3 = 'Tử-Thân';
		pt5 = 'Tài-Tý';
		tu1 = '(Ư)';
		tu4 = '(T)';
		tuongque = ' - DH';
		cung = 'Cấn';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 1 && hao4 == 0 && hao5 == 1 && hao6 == 1) {
		tenque = 'Phong Hỏa Gia Nhân';
		lt1 = 'Huynh Đệ';
		lt2 = 'Thê Tài';
		lt3 = 'Phụ Mẫu';
		lt4 = 'Thê Tài';
		lt5 = 'Tử Tôn';
		lt6 = 'Huynh Đệ';
		c1 = "K.Mão";
		c2 = "K.Sửu";
		c3 = "K.Hợi";
		c4 = "T.Mùi";
		c5 = "T.Tị";
		c6 = "T.Mão";
		nh = "moc";
		pt3 = 'Quan-Dậu';
		tu2 = '(T)';
		tu5 = '(Ư)';
		tuongque = '';
		cung = 'Tốn';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 0 && hao4 == 0 && hao5 == 1 && hao6 == 1) {
		tenque = 'Phong Lôi Ích';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Huynh Đệ';
		lt3 = 'Thê Tài';
		lt4 = 'Thê Tài';
		lt5 = 'Tử Tôn';
		lt6 = 'Huynh Đệ';
		c1 = "C.Tý";
		c2 = "C.Dần";
		c3 = "C.Thìn";
		c4 = "T.Mùi";
		c5 = "T.Tị";
		c6 = "T.Mão";
		nh = "moc";
		pt3 = 'Quan-Dậu';
		tu3 = '(T)';
		tu6 = '(Ư)';
		tuongque = '';
		cung = 'Tốn';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 1 && hao4 == 0 && hao5 == 1 && hao6 == 1) {
		tenque = 'Thuần Tốn';
		lt1 = 'Thê Tài';
		lt2 = 'Phụ Mẫu';
		lt3 = 'Quan Quỹ';
		lt4 = 'Thê Tài';
		lt5 = 'Tử Tôn';
		lt6 = 'Huynh Đệ';
		c1 = "T.Sửu";
		c2 = "T.Hợi";
		c3 = "T.Dậu";
		c4 = "T.Mùi";
		c5 = "T.Tị";
		c6 = "T.Mão";
		nh = "moc";
		tu3 = '(Ư)';
		tu6 = '(T)';
		tuongque = ' - LX';
		cung = 'Tốn';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 0 && hao4 == 0 && hao5 == 1 && hao6 == 1) {
		tenque = 'Phong Thủy Hoán';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Tử Tôn';
		lt3 = 'Huynh Đệ';
		lt4 = 'Tử Tôn';
		lt5 = 'Huynh Đệ';
		lt6 = 'Phụ Mẫu';
		c1 = "M.Dần";
		c2 = "M.Thìn";
		c3 = "M.Ngọ";
		c4 = "T.Mùi";
		c5 = "T.Tị";
		c6 = "T.Mão";
		nh = "hoa";
		pt3 = 'Quan-Hợi';
		pt4 = 'Tài-Dậu';
		tu2 = '(Ư)';
		tu5 = '(T)';
		tuongque = '';
		cung = 'Ly';
	}
	if(hao1 == 0 && hao2 == 0 && hao3 == 1 && hao4 == 0 && hao5 == 1 && hao6 == 1) {
		tenque = 'Phong Sơn Tiệm';
		lt1 = 'Huynh Đệ';
		lt2 = 'Phụ Mẫu';
		lt3 = 'Tử Tôn';
		lt4 = 'Huynh Đệ';
		lt5 = 'Phụ Mẫu';
		lt6 = 'Quan Quỹ';
		c1 = "B.Thìn";
		c2 = "B.Ngọ";
		c3 = "B.Thân";
		c4 = "T.Mùi";
		c5 = "T.Tị";
		c6 = "T.Mão";
		nh = "tho";
		pt5 = 'Tài-Tý';
		tu3 = '(T)';
		tu6 = '(Ư)';
		tuongque = ' - QH';
		cung = 'Cấn';
	}
	//////Thượng Quái Khảm
	if(hao1 == 0 && hao2 == 0 && hao3 == 0 && hao4 == 0 && hao5 == 1 && hao6 == 0) {
		tenque = 'Thủy Địa Tỷ';
		lt1 = 'Huynh Đệ';
		lt2 = 'Phụ Mẫu';
		lt3 = 'Quan Quỹ';
		lt4 = 'Tử Tôn';
		lt5 = 'Huynh Đệ';
		lt6 = 'Thê Tài';
		c1 = "A.Mùi";
		c2 = "A.Tị";
		c3 = "A.Mão";
		c4 = "M.Thân";
		c5 = "M.Tuất";
		c6 = "M.Tý";
		nh = "tho";
		tu3 = '(T)';
		tu6 = '(Ư)';
		tuongque = ' - QH';
		cung = 'Khôn';
	}
	if(hao1 == 1 && hao2 == 1 && hao3 == 1 && hao4 == 0 && hao5 == 1 && hao6 == 0) {
		tenque = 'Thủy Thiên Nhu';
		lt1 = 'Thê Tài';
		lt2 = 'Quan Quỹ';
		lt3 = 'Huynh Đệ';
		lt4 = 'Tử Tôn';
		lt5 = 'Huynh Đệ';
		lt6 = 'Thê Tài';
		c1 = "G.Tý";
		c2 = "G.Dần";
		c3 = "G.Thìn";
		c4 = "M.Thân";
		c5 = "M.Tuất";
		c6 = "M.Tý";
		nh = "tho";
		pt2 = 'Phụ-Tị';
		tu1 = '(Ư)';
		tu4 = '(T)';
		tuongque = ' - DH';
		cung = 'Khôn';
	}
	if(hao1 == 1 && hao2 == 1 && hao3 == 0 && hao4 == 0 && hao5 == 1 && hao6 == 0) {
		tenque = 'Thủy Trạch Tiết';
		lt1 = 'Thê Tài';
		lt2 = 'Tử Tôn';
		lt3 = 'Quan Quỹ';
		lt4 = 'Phụ Mẫu';
		lt5 = 'Quan Quỹ';
		lt6 = 'Huynh Đệ';
		c1 = "Đ.Tị";
		c2 = "Đ.Mão";
		c3 = "Đ.Sửu";
		c4 = "M.Thân";
		c5 = "M.Tuất";
		c6 = "M.Tý";
		nh = "thuy";
		tu1 = '(T)';
		tu4 = '(Ư)';
		tuongque = ' - LH';
		cung = 'Khảm';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 1 && hao4 == 0 && hao5 == 1 && hao6 == 0) {
		tenque = 'Thủy Hỏa Ký Tế';
		lt1 = 'Tử Tôn';
		lt2 = 'Quan Quỹ';
		lt3 = 'Huynh Đệ';
		lt4 = 'Phụ Mẫu';
		lt5 = 'Quan Quỹ';
		lt6 = 'Huynh Đệ';
		c1 = "K.Mão";
		c2 = "K.Sửu";
		c3 = "K.Hợi";
		c4 = "M.Thân";
		c5 = "M.Tuất";
		c6 = "M.Tý";
		nh = "thuy";
		pt3 = 'Tài-Ngọ';
		tu3 = '(T)';
		tu6 = '(Ư)';
		tuongque = '';
		cung = 'Khảm';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 0 && hao4 == 0 && hao5 == 1 && hao6 == 0) {
		tenque = 'Thủy Lôi Truân';
		lt1 = 'Huynh Đệ';
		lt2 = 'Tử Tôn';
		lt3 = 'Quan Quỹ';
		lt4 = 'Phụ Mẫu';
		lt5 = 'Quan Quỹ';
		lt6 = 'Huynh Đệ';
		c1 = "C.Tý";
		c2 = "C.Dần";
		c3 = "C.Thìn";
		c4 = "M.Thân";
		c5 = "M.Tuất";
		c6 = "M.Tý";
		nh = "thuy";
		pt3 = 'Tài-Ngọ';
		tu2 = '(T)';
		tu5 = '(Ư)';
		tuongque = '';
		cung = 'Khảm';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 1 && hao4 == 0 && hao5 == 1 && hao6 == 0) {
		tenque = 'Thủy Phong Tỉnh';
		lt1 = 'Thê Tài';
		lt2 = 'Phụ Mẫu';
		lt3 = 'Quan Quỹ';
		lt4 = 'Quan Quỹ';
		lt5 = 'Thê Tài';
		lt6 = 'Phụ Mẫu';
		c1 = "T.Sửu";
		c2 = "T.Hợi";
		c3 = "T.Dậu";
		c4 = "M.Thân";
		c5 = "M.Tuất";
		c6 = "M.Tý";
		nh = "moc";
		pt2 = 'Đệ-Dần';
		pt4 = 'Tử-Ngọ';
		tu2 = '(Ư)';
		tu5 = '(T)';
		tuongque = '';
		cung = 'Chấn';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 0 && hao4 == 0 && hao5 == 1 && hao6 == 0) {
		tenque = 'Thuần Khảm';
		lt1 = 'Tử Tôn';
		lt2 = 'Quan Quỹ';
		lt3 = 'Thê Tài';
		lt4 = 'Phụ Mẫu';
		lt5 = 'Quan Quỹ';
		lt6 = 'Huynh Đệ';
		c1 = "M.Dần";
		c2 = "M.Thìn";
		c3 = "M.Ngọ";
		c4 = "M.Thân";
		c5 = "M.Tuất";
		c6 = "M.Tý";
		nh = "thuy";
		tu3 = '(Ư)';
		tu6 = '(T)';
		tuongque = ' - LX';
		cung = 'Khảm';
	}
	if(hao1 == 0 && hao2 == 0 && hao3 == 1 && hao4 == 0 && hao5 == 1 && hao6 == 0) {
		tenque = 'Thủy Sơn Kiển';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Quan Quỹ';
		lt3 = 'Huynh Đệ';
		lt4 = 'Huynh Đệ';
		lt5 = 'Phụ Mẫu';
		lt6 = 'Tử Tôn';
		c1 = "B.Thìn";
		c2 = "B.Ngọ";
		c3 = "B.Thân";
		c4 = "M.Thân";
		c5 = "M.Tuất";
		c6 = "M.Tý";
		nh = "kim";
		pt2 = 'Tài-Mão';
		tu1 = '(Ư)';
		tu4 = '(T)';
		tuongque = '';
		cung = 'Đoài';
	}
	//////Thượng Quái Cấn
	if(hao1 == 0 && hao2 == 0 && hao3 == 0 && hao4 == 0 && hao5 == 0 && hao6 == 1) {
		tenque = 'Sơn Địa Bác';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Quan Quỹ';
		lt3 = 'Thê Tài';
		lt4 = 'Phụ Mẫu';
		lt5 = 'Tử Tôn';
		lt6 = 'Thê Tài';
		c1 = "A.Mùi";
		c2 = "A.Tị";
		c3 = "A.Mão";
		c4 = "B.Tuất";
		c5 = "B.Tý";
		c6 = "B.Dần";
		nh = "kim";
		pt5 = 'Đệ-Thân';
		tu2 = '(Ư)';
		tu5 = '(T)';
		tuongque = '';
		cung = 'Càn';
	}
	if(hao1 == 1 && hao2 == 1 && hao3 == 1 && hao4 == 0 && hao5 == 0 && hao6 == 1) {
		tenque = 'Sơn Thiên Đại Súc';
		lt1 = 'Thê Tài';
		lt2 = 'Quan Quỹ';
		lt3 = 'Huynh Đệ';
		lt4 = 'Huynh Đệ';
		lt5 = 'Thê Tài';
		lt6 = 'Quan Quỹ';
		c1 = "G.Tý";
		c2 = "G.Dần";
		c3 = "G.Thìn";
		c4 = "B.Tuất";
		c5 = "B.Tý";
		c6 = "B.Dần";
		nh = "tho";
		pt2 = 'Phụ-Ngọ';
		pt3 = 'Tử-Thân';
		tu2 = '(T)';
		tu5 = '(Ư)';
		tuongque = '';
		cung = 'Cấn';
	}
	if(hao1 == 1 && hao2 == 1 && hao3 == 0 && hao4 == 0 && hao5 == 0 && hao6 == 1) {
		tenque = 'Sơn Trạch Tổn';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Quan Quỹ';
		lt3 = 'Huynh Đệ';
		lt4 = 'Huynh Đệ';
		lt5 = 'Thê Tài';
		lt6 = 'Quan Quỹ';
		c1 = "Đ.Tị";
		c2 = "Đ.Mão";
		c3 = "Đ.Sửu";
		c4 = "B.Tuất";
		c5 = "B.Tý";
		c6 = "B.Dần";
		nh = "tho";
		pt3 = 'Tử-Thân';
		tu3 = '(T)';
		tu6 = '(Ư)';
		tuongque = '';
		cung = 'Cấn';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 1 && hao4 == 0 && hao5 == 0 && hao6 == 1) {
		tenque = 'Sơn Hỏa Bí';
		lt1 = 'Quan Quỹ';
		lt2 = 'Huynh Đệ';
		lt3 = 'Thê Tài';
		lt4 = 'Huynh Đệ';
		lt5 = 'Thê Tài';
		lt6 = 'Quan Quỹ';
		c1 = "K.Mão";
		c2 = "K.Sửu";
		c3 = "K.Hợi";
		c4 = "B.Tuất";
		c5 = "B.Tý";
		c6 = "B.Dần";
		nh = "tho";
		pt2 = 'Phụ-Ngọ';
		pt3 = 'Tử-Thân';
		tu1 = '(T)';
		tu4 = '(Ư)';
		tuongque = ' - LH';
		cung = 'Cấn';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 0 && hao4 == 0 && hao5 == 0 && hao6 == 1) {
		tenque = 'Sơn Lôi Di';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Huynh Đệ';
		lt3 = 'Thê Tài';
		lt4 = 'Thê Tài';
		lt5 = 'Phụ Mẫu';
		lt6 = 'Huynh Đệ';
		c1 = "C.Tý";
		c2 = "C.Dần";
		c3 = "C.Thìn";
		c4 = "B.Tuất";
		c5 = "B.Tý";
		c6 = "B.Dần";
		nh = "moc";
		pt3 = 'Quan-Dậu';
		pt5 = 'Tử-Tị';
		tu1 = '(Ư)';
		tu4 = '(T)';
		tuongque = ' - DH';
		cung = 'Tốn';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 1 && hao4 == 0 && hao5 == 0 && hao6 == 1) {
		tenque = 'Sơn Phong Cổ';
		lt1 = 'Thê Tài';
		lt2 = 'Phụ Mẫu';
		lt3 = 'Quan Quỹ';
		lt4 = 'Thê Tài';
		lt5 = 'Phụ Mẫu';
		lt6 = 'Huynh Đệ';
		c1 = "T.Sửu";
		c2 = "T.Hợi";
		c3 = "T.Dậu";
		c4 = "B.Tuất";
		c5 = "B.Tý";
		c6 = "B.Dần";
		nh = "moc";
		pt5 = 'Tử-Tị';
		tu3 = '(T)';
		tu6 = '(Ư)';
		tuongque = ' - QH';
		cung = 'Tốn';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 0 && hao4 == 0 && hao5 == 0 && hao6 == 1) {
		tenque = 'Sơn Thủy Mông';
		lt1 = 'Phụ Mẫu';
		lt2 = 'Tử Tôn';
		lt3 = 'Huynh Đệ';
		lt4 = 'Tử Tôn';
		lt5 = 'Quan Quỹ';
		lt6 = 'Phụ Mẫu';
		c1 = "M.Dần";
		c2 = "M.Thìn";
		c3 = "M.Ngọ";
		c4 = "B.Tuất";
		c5 = "B.Tý";
		c6 = "B.Dần";
		nh = "hoa";
		pt4 = 'Tài-Dậu';
		tu1 = '(Ư)';
		tu4 = '(T)';
		tuongque = '';
		cung = 'Ly';
	}
	if(hao1 == 0 && hao2 == 0 && hao3 == 1 && hao4 == 0 && hao5 == 0 && hao6 == 1) {
		tenque = 'Thuần Cấn';
		lt1 = 'Huynh Đệ';
		lt2 = 'Phụ Mẫu';
		lt3 = 'Tử Tôn';
		lt4 = 'Huynh Đệ';
		lt5 = 'Thê Tài';
		lt6 = 'Quan Quỹ';
		c1 = "B.Thìn";
		c2 = "B.Ngọ";
		c3 = "B.Thân";
		c4 = "B.Tuất";
		c5 = "B.Tý";
		c6 = "B.Dần";
		nh = "tho";
		tu3 = '(Ư)';
		tu6 = '(T)';
		tuongque = ' - LX';
		cung = 'Cấn';
	}
	return [tenque, lt1, lt2, lt3, lt4, lt5, lt6, c1, c2, c3, c4, c5, c6, pt1, pt2, pt3, pt4, pt5, pt6, tu1, tu2, tu3, tu4, tu5, tu6, nh, tuongque, cung];
}
/////// Lục Thân Quẻ Biến
function $ltqb(hao1, hao2, hao3, hao4, hao5, hao6, nh) {
	var h1, h2, h3, h4, h5, h6;
	//////// Ngủ Hành KIM
	if(hao1 == 1 && hao2 == 1 && hao3 == 1 && nh == 'kim') {
		h1 = 'Tử Tôn';
		h2 = 'Thê Tài';
		h3 = 'Phụ Mẫu';
	}
	if(hao4 == 1 && hao5 == 1 && hao6 == 1 && nh == 'kim') {
		h4 = 'Quan Quỹ';
		h5 = 'Huynh Đệ';
		h6 = 'Phụ Mẫu';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 0 && nh == 'kim') {
		h1 = 'Thê Tài';
		h2 = 'Phụ Mẫu';
		h3 = 'Quan Quỹ';
	}
	if(hao4 == 0 && hao5 == 1 && hao6 == 0 && nh == 'kim') {
		h4 = 'Huynh Đệ';
		h5 = 'Phụ Mẫu';
		h6 = 'Tử Tôn';
	}
	if(hao1 == 0 && hao2 == 0 && hao3 == 1 && nh == 'kim') {
		h1 = 'Phụ Mẫu';
		h2 = 'Quan Quỹ';
		h3 = 'Huynh Đệ';
	}
	if(hao4 == 0 && hao5 == 0 && hao6 == 1 && nh == 'kim') {
		h4 = 'Phụ Mẫu';
		h5 = 'Tử Tôn';
		h6 = 'Thê Tài';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 0 && nh == 'kim') {
		h1 = 'Tử Tôn';
		h2 = 'Thê Tài';
		h3 = 'Phụ Mẫu';
	}
	if(hao4 == 1 && hao5 == 0 && hao6 == 0 && nh == 'kim') {
		h4 = 'Quan Quỹ';
		h5 = 'Huynh Đệ';
		h6 = 'Phụ Mẫu';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 1 && nh == 'kim') {
		h1 = 'Phụ Mẫu';
		h2 = 'Tử Tôn';
		h3 = 'Huynh Đệ';
	}
	if(hao4 == 0 && hao5 == 1 && hao6 == 1 && nh == 'kim') {
		h4 = 'Phụ Mẫu';
		h5 = 'Quan Quỹ';
		h6 = 'Thê Tài';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 1 && nh == 'kim') {
		h1 = 'Thê Tài';
		h2 = 'Phụ Mẫu';
		h3 = 'Tử Tôn';
	}
	if(hao4 == 1 && hao5 == 0 && hao6 == 1 && nh == 'kim') {
		h4 = 'Huynh Đệ';
		h5 = 'Phụ Mẫu';
		h6 = 'Quan Quỹ';
	}
	if(hao1 == 1 && hao2 == 1 && hao3 == 0 && nh == 'kim') {
		h1 = 'Quan Quỹ';
		h2 = 'Thê Tài';
		h3 = 'Phụ Mẫu';
	}
	if(hao4 == 1 && hao5 == 1 && hao6 == 0 && nh == 'kim') {
		h4 = 'Tử Tôn';
		h5 = 'Huynh Đệ';
		h6 = 'Phụ Mẫu';
	}
	if(hao1 == 0 && hao2 == 0 && hao3 == 0 && nh == 'kim') {
		h1 = 'Phụ Mẫu';
		h2 = 'Quan Quỹ';
		h3 = 'Thê Tài';
	}
	if(hao4 == 0 && hao5 == 0 && hao6 == 0 && nh == 'kim') {
		h4 = 'Phụ Mẫu';
		h5 = 'Tử Tôn';
		h6 = 'Huynh Đệ';
	}
	//////// Ngủ Hành MỘC
	if(hao1 == 1 && hao2 == 1 && hao3 == 1 && nh == 'moc') {
		h1 = 'Phụ Mẫu';
		h2 = 'Huynh Đệ';
		h3 = 'Thê Tài';
	}
	if(hao4 == 1 && hao5 == 1 && hao6 == 1 && nh == 'moc') {
		h4 = 'Tử Tôn';
		h5 = 'Quan Quỹ';
		h6 = 'Thê Tài';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 0 && nh == 'moc') {
		h1 = 'Huynh Đệ';
		h2 = 'Thê Tài';
		h3 = 'Tử Tôn';
	}
	if(hao4 == 0 && hao5 == 1 && hao6 == 0 && nh == 'moc') {
		h4 = 'Quan Quỹ';
		h5 = 'Thê Tài';
		h6 = 'Phụ Mẫu';
	}
	if(hao1 == 0 && hao2 == 0 && hao3 == 1 && nh == 'moc') {
		h1 = 'Thê Tài';
		h2 = 'Tử Tôn';
		h3 = 'Quan Quỹ';
	}
	if(hao4 == 0 && hao5 == 0 && hao6 == 1 && nh == 'moc') {
		h4 = 'Thê Tài';
		h5 = 'Phụ Mẫu';
		h6 = 'Huynh Đệ';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 0 && nh == 'moc') {
		h1 = 'Phụ Mẫu';
		h2 = 'Huynh Đệ';
		h3 = 'Thê Tài';
	}
	if(hao4 == 1 && hao5 == 0 && hao6 == 0 && nh == 'moc') {
		h4 = 'Tử Tôn';
		h5 = 'Quan Quỹ';
		h6 = 'Thê Tài';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 1 && nh == 'moc') {
		h1 = 'Thê Tài';
		h2 = 'Phụ Mẫu';
		h3 = 'Quan Quỹ';
	}
	if(hao4 == 0 && hao5 == 1 && hao6 == 1 && nh == 'moc') {
		h4 = 'Thê Tài';
		h5 = 'Tử Tôn';
		h6 = 'Huynh Đệ';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 1 && nh == 'moc') {
		h1 = 'Huynh Đệ';
		h2 = 'Thê Tài';
		h3 = 'Phụ Mẫu';
	}
	if(hao4 == 1 && hao5 == 0 && hao6 == 1 && nh == 'moc') {
		h4 = 'Quan Quỹ';
		h5 = 'Thê Tài';
		h6 = 'Tử Tôn';
	}
	if(hao1 == 1 && hao2 == 1 && hao3 == 0 && nh == 'moc') {
		h1 = 'Tử Tôn';
		h2 = 'Huynh Đệ';
		h3 = 'Thê Tài';
	}
	if(hao4 == 1 && hao5 == 1 && hao6 == 0 && nh == 'moc') {
		h4 = 'Phụ Mẫu';
		h5 = 'Quan Quỹ';
		h6 = 'Thê Tài';
	}
	if(hao1 == 0 && hao2 == 0 && hao3 == 0 && nh == 'moc') {
		h1 = 'Thê Tài';
		h2 = 'Tử Tôn';
		h3 = 'Huynh Đệ';
	}
	if(hao4 == 0 && hao5 == 0 && hao6 == 0 && nh == 'moc') {
		h4 = 'Thê Tài';
		h5 = 'Phụ Mẫu';
		h6 = 'Quan Quỹ';
	}
	//////// Ngủ Hành THỦY
	if(hao1 == 1 && hao2 == 1 && hao3 == 1 && nh == 'thuy') {
		h1 = 'Huynh Đệ';
		h2 = 'Tử Tôn';
		h3 = 'Quan Quỹ';
	}
	if(hao4 == 1 && hao5 == 1 && hao6 == 1 && nh == 'thuy') {
		h4 = 'Thê Tài';
		h5 = 'Phụ Mẫu';
		h6 = 'Quan Quỹ';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 0 && nh == 'thuy') {
		h1 = 'Tử Tôn';
		h2 = 'Quan Quỹ';
		h3 = 'Thê Tài';
	}
	if(hao4 == 0 && hao5 == 1 && hao6 == 0 && nh == 'thuy') {
		h4 = 'Phụ Mẫu';
		h5 = 'Quan Quỹ';
		h6 = 'Huynh Đệ';
	}
	if(hao1 == 0 && hao2 == 0 && hao3 == 1 && nh == 'thuy') {
		h1 = 'Quan Quỹ';
		h2 = 'Thê Tài';
		h3 = 'Phụ Mẫu';
	}
	if(hao4 == 0 && hao5 == 0 && hao6 == 1 && nh == 'thuy') {
		h4 = 'Quan Quỹ';
		h5 = 'Huynh Đệ';
		h6 = 'Tử Tôn';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 0 && nh == 'thuy') {
		h1 = 'Huynh Đệ';
		h2 = 'Tử Tôn';
		h3 = 'Quan Quỹ';
	}
	if(hao4 == 1 && hao5 == 0 && hao6 == 0 && nh == 'thuy') {
		h4 = 'Thê Tài';
		h5 = 'Phụ Mẫu';
		h6 = 'Quan Quỹ';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 1 && nh == 'thuy') {
		h1 = 'Quan Quỹ';
		h2 = 'Huynh Đệ';
		h3 = 'Phụ Mẫu';
	}
	if(hao4 == 0 && hao5 == 1 && hao6 == 1 && nh == 'thuy') {
		h4 = 'Quan Quỹ';
		h5 = 'Thê Tài';
		h6 = 'Tử Tôn';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 1 && nh == 'thuy') {
		h1 = 'Tử Tôn';
		h2 = 'Quan Quỹ';
		h3 = 'Huynh Đệ';
	}
	if(hao4 == 1 && hao5 == 0 && hao6 == 1 && nh == 'thuy') {
		h4 = 'Phụ Mẫu';
		h5 = 'Quan Quỹ';
		h6 = 'Thê Tài';
	}
	if(hao1 == 1 && hao2 == 1 && hao3 == 0 && nh == 'thuy') {
		h1 = 'Thê Tài';
		h2 = 'Tử Tôn';
		h3 = 'Quan Quỹ';
	}
	if(hao4 == 1 && hao5 == 1 && hao6 == 0 && nh == 'thuy') {
		h4 = 'Huynh Đệ';
		h5 = 'Phụ Mẫu';
		h6 = 'Quan Quỹ';
	}
	if(hao1 == 0 && hao2 == 0 && hao3 == 0 && nh == 'thuy') {
		h1 = 'Quan Quỹ';
		h2 = 'Thê Tài';
		h3 = 'Tử Tôn';
	}
	if(hao4 == 0 && hao5 == 0 && hao6 == 0 && nh == 'thuy') {
		h4 = 'Quan Quỹ';
		h5 = 'Huynh Đệ';
		h6 = 'Phụ Mẫu';
	}
	//////// Ngủ Hành HỎA
	if(hao1 == 1 && hao2 == 1 && hao3 == 1 && nh == 'hoa') {
		h1 = 'Quan Quỹ';
		h2 = 'Phụ Mẫu';
		h3 = 'Tử Tôn';
	}
	if(hao4 == 1 && hao5 == 1 && hao6 == 1 && nh == 'hoa') {
		h4 = 'Huynh Đệ';
		h5 = 'Thê Tài';
		h6 = 'Tử Tôn';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 0 && nh == 'hoa') {
		h1 = 'Phụ Mẫu';
		h2 = 'Tử Tôn';
		h3 = 'Huynh Đệ';
	}
	if(hao4 == 0 && hao5 == 1 && hao6 == 0 && nh == 'hoa') {
		h4 = 'Thê Tài';
		h5 = 'Tử Tôn';
		h6 = 'Quan Quỹ';
	}
	if(hao1 == 0 && hao2 == 0 && hao3 == 1 && nh == 'hoa') {
		h1 = 'Tử Tôn';
		h2 = 'Huynh Đệ';
		h3 = 'Thê Tài';
	}
	if(hao4 == 0 && hao5 == 0 && hao6 == 1 && nh == 'hoa') {
		h4 = 'Tử Tôn';
		h5 = 'Quan Quỹ';
		h6 = 'Phụ Mẫu';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 0 && nh == 'hoa') {
		h1 = 'Quan Quỹ';
		h2 = 'Phụ Mẫu';
		h3 = 'Tử Tôn';
	}
	if(hao4 == 1 && hao5 == 0 && hao6 == 0 && nh == 'hoa') {
		h4 = 'Huynh Đệ';
		h5 = 'Thê Tài';
		h6 = 'Tử Tôn';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 1 && nh == 'hoa') {
		h1 = 'Tử Tôn';
		h2 = 'Quan Quỹ';
		h3 = 'Thê Tài';
	}
	if(hao4 == 0 && hao5 == 1 && hao6 == 1 && nh == 'hoa') {
		h4 = 'Tử Tôn';
		h5 = 'Huynh Đệ';
		h6 = 'Phụ Mẫu';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 1 && nh == 'hoa') {
		h1 = 'Phụ Mẫu';
		h2 = 'Tử Tôn';
		h3 = 'Quan Quỹ';
	}
	if(hao4 == 1 && hao5 == 0 && hao6 == 1 && nh == 'hoa') {
		h4 = 'Thê Tài';
		h5 = 'Tử Tôn';
		h6 = 'Huynh Đệ';
	}
	if(hao1 == 1 && hao2 == 1 && hao3 == 0 && nh == 'hoa') {
		h1 = 'Huynh Đệ';
		h2 = 'Phụ Mẫu';
		h3 = 'Tử Tôn';
	}
	if(hao4 == 1 && hao5 == 1 && hao6 == 0 && nh == 'hoa') {
		h4 = 'Quan Quỹ';
		h5 = 'Thê Tài';
		h6 = 'Tử Tôn';
	}
	if(hao1 == 0 && hao2 == 0 && hao3 == 0 && nh == 'hoa') {
		h1 = 'Tử Tôn';
		h2 = 'Huynh Đệ';
		h3 = 'Phụ Mẫu';
	}
	if(hao4 == 0 && hao5 == 0 && hao6 == 0 && nh == 'hoa') {
		h4 = 'Tử Tôn';
		h5 = 'Quan Quỹ';
		h6 = 'Thê Tài';
	}
	//////// Ngủ Hành THỔ
	if(hao1 == 1 && hao2 == 1 && hao3 == 1 && nh == 'tho') {
		h1 = 'Thê Tài';
		h2 = 'Quan Quỹ';
		h3 = 'Huynh Đệ';
	}
	if(hao4 == 1 && hao5 == 1 && hao6 == 1 && nh == 'tho') {
		h4 = 'Phụ Mẫu';
		h5 = 'Tử Tôn';
		h6 = 'Huynh Đệ';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 0 && nh == 'tho') {
		h1 = 'Quan Quỹ';
		h2 = 'Huynh Đệ';
		h3 = 'Phụ Mẫu';
	}
	if(hao4 == 0 && hao5 == 1 && hao6 == 0 && nh == 'tho') {
		h4 = 'Tử Tôn';
		h5 = 'Huynh Đệ';
		h6 = 'Thê Tài';
	}
	if(hao1 == 0 && hao2 == 0 && hao3 == 1 && nh == 'tho') {
		h1 = 'Huynh Đệ';
		h2 = 'Phụ Mẫu';
		h3 = 'Tử Tôn';
	}
	if(hao4 == 0 && hao5 == 0 && hao6 == 1 && nh == 'tho') {
		h4 = 'Huynh Đệ';
		h5 = 'Thê Tài';
		h6 = 'Quan Quỹ';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 0 && nh == 'tho') {
		h1 = 'Thê Tài';
		h2 = 'Quan Quỹ';
		h3 = 'Huynh Đệ';
	}
	if(hao4 == 1 && hao5 == 0 && hao6 == 0 && nh == 'tho') {
		h4 = 'Phụ Mẫu';
		h5 = 'Tử Tôn';
		h6 = 'Huynh Đệ';
	}
	if(hao1 == 0 && hao2 == 1 && hao3 == 1 && nh == 'tho') {
		h1 = 'Huynh Đệ';
		h2 = 'Thê Tài';
		h3 = 'Tử Tôn';
	}
	if(hao4 == 0 && hao5 == 1 && hao6 == 1 && nh == 'tho') {
		h4 = 'Huynh Đệ';
		h5 = 'Phụ Mẫu';
		h6 = 'Quan Quỹ';
	}
	if(hao1 == 1 && hao2 == 0 && hao3 == 1 && nh == 'tho') {
		h1 = 'Quan Quỹ';
		h2 = 'Huynh Đệ';
		h3 = 'Thê Tài';
	}
	if(hao4 == 1 && hao5 == 0 && hao6 == 1 && nh == 'tho') {
		h4 = 'Tử Tôn';
		h5 = 'Huynh Đệ';
		h6 = 'Phụ Mẫu';
	}
	if(hao1 == 1 && hao2 == 1 && hao3 == 0 && nh == 'tho') {
		h1 = 'Phụ Mẫu';
		h2 = 'Quan Quỹ';
		h3 = 'Huynh Đệ';
	}
	if(hao4 == 1 && hao5 == 1 && hao6 == 0 && nh == 'tho') {
		h4 = 'Thê Tài';
		h5 = 'Tử Tôn';
		h6 = 'Huynh Đệ';
	}
	if(hao1 == 0 && hao2 == 0 && hao3 == 0 && nh == 'tho') {
		h1 = 'Huynh Đệ';
		h2 = 'Phụ Mẫu';
		h3 = 'Quan Quỹ';
	}
	if(hao4 == 0 && hao5 == 0 && hao6 == 0 && nh == 'tho') {
		h4 = 'Huynh Đệ';
		h5 = 'Thê Tài';
		h6 = 'Tử Tôn';
	}
	return [h1, h2, h3, h4, h5, h6];
}
//////// Function tính tuần không
function tuankhong(jd, cn) {
	var TuanGiap;
	var $Can = ((jd + 9) % 10);
	var $Chi = ((jd + 1) % 12);
	var count;
	var tk = '';
	for(count = $Can; count >= 0; count--) {
		TuanGiap = $Chi--;
		if(TuanGiap == 0 || TuanGiap == -12) {
			TuanGiap = 0;
		}
		if(TuanGiap == 2 || TuanGiap == -10) {
			TuanGiap = 2;
		}
		if(TuanGiap == 4 || TuanGiap == -8) {
			TuanGiap = 4;
		}
		if(TuanGiap == 6 || TuanGiap == -6) {
			TuanGiap = 6;
		}
		if(TuanGiap == 8 || TuanGiap == -4) {
			TuanGiap = 8;
		}
		if(TuanGiap == 10 || TuanGiap == -2) {
			TuanGiap = 10;
		}
	}
	if(TuanGiap == 0 && (cn == 'Hợi' || cn == 'Tuất')) {
		tk = 'TK';
	}
	if(TuanGiap == 2 && (cn == 'Sửu' || cn == 'Tý')) {
		tk = 'TK';
	}
	if(TuanGiap == 4 && (cn == 'Dần' || cn == 'Mão')) {
		tk = 'TK';
	}
	if(TuanGiap == 6 && (cn == 'Tị' || cn == 'Thìn')) {
		tk = 'TK';
	}
	if(TuanGiap == 8 && (cn == 'Ngọ' || cn == 'Mùi')) {
		tk = 'TK';
	}
	if(TuanGiap == 10 && (cn == 'Thân' || cn == 'Dậu')) {
		tk = 'TK';
	}
	return tk;
}
//////////Fuction Tính Tuần Không Của Năm + Liên Sơn
function nk(yy) {
	var ng;
	var $Can = ((yy + 6) % 10);
	var $Chi = ((yy + 8) % 12);
	var count;
	var trucphu, thaiduong, ttphu, thaiam, quanphu, tuphu, tuepha, phucduc, bachho, xauphu, benhphu, longduc;
	for(count = $Can; count >= 0; count--) {
		ng = $Chi--;
		if(ng == 0 || ng == -12) {
			ng = 0;
		}
		if(ng == 2 || ng == -10) {
			ng = 2;
		}
		if(ng == 4 || ng == -8) {
			ng = 4;
		}
		if(ng == 6 || ng == -6) {
			ng = 6;
		}
		if(ng == 8 || ng == -4) {
			ng = 8;
		}
		if(ng == 10 || ng == -2) {
			ng = 10;
		}
	}
	var trucphu = (CHI[ng]);
	if(ng == 0) {
		thaiduong = (CHI[ng + 1]);
		ttphu = (CHI[ng + 2]);
		thaiam = (CHI[ng + 3]);
		quanphu = (CHI[ng + 4]);
		tuphu = (CHI[ng + 5]);
		tuepha = (CHI[ng + 6]);
		phucduc = (CHI[ng + 7]);
		bachho = (CHI[ng + 8]);
		longduc = (CHI[ng + 9]);
		xauphu = (CHI[ng + 10]);
		benhphu = (CHI[ng + 11]);
	}
	if(ng == 2) {
		thaiduong = (CHI[ng + 1]);
		ttphu = (CHI[ng + 2]);
		thaiam = (CHI[ng + 3]);
		quanphu = (CHI[ng + 4]);
		tuphu = (CHI[ng + 5]);
		tuepha = (CHI[ng + 6]);
		phucduc = (CHI[ng + 7]);
		bachho = (CHI[ng + 8]);
		longduc = (CHI[ng + 9]);
		xauphu = (CHI[ng - 2]);
		benhphu = (CHI[ng - 1]);
	}
	if(ng == 4) {
		thaiduong = (CHI[ng + 1]);
		ttphu = (CHI[ng + 2]);
		thaiam = (CHI[ng + 3]);
		quanphu = (CHI[ng + 4]);
		tuphu = (CHI[ng + 5]);
		tuepha = (CHI[ng + 6]);
		phucduc = (CHI[ng + 7]);
		bachho = (CHI[ng - 4]);
		longduc = (CHI[ng - 3]);
		xauphu = (CHI[ng - 2]);
		benhphu = (CHI[ng - 1]);
	}
	if(ng == 6) {
		thaiduong = (CHI[ng + 1]);
		ttphu = (CHI[ng + 2]);
		thaiam = (CHI[ng + 3]);
		quanphu = (CHI[ng + 4]);
		tuphu = (CHI[ng + 5]);
		tuepha = (CHI[ng - 6]);
		phucduc = (CHI[ng - 5]);
		bachho = (CHI[ng - 4]);
		longduc = (CHI[ng - 3]);
		xauphu = (CHI[ng - 2]);
		benhphu = (CHI[ng - 1]);
	}
	if(ng == 8) {
		thaiduong = (CHI[ng + 1]);
		ttphu = (CHI[ng + 2]);
		thaiam = (CHI[ng + 3]);
		quanphu = (CHI[ng - 8]);
		tuphu = (CHI[ng - 7]);
		tuepha = (CHI[ng - 6]);
		phucduc = (CHI[ng - 5]);
		bachho = (CHI[ng - 4]);
		longduc = (CHI[ng - 3]);
		xauphu = (CHI[ng - 2]);
		benhphu = (CHI[ng - 1]);
	}
	if(ng == 10) {
		thaiduong = (CHI[ng + 1]);
		ttphu = (CHI[ng - 10]);
		thaiam = (CHI[ng - 9]);
		quanphu = (CHI[ng - 8]);
		tuphu = (CHI[ng - 7]);
		tuepha = (CHI[ng - 6]);
		phucduc = (CHI[ng - 5]);
		bachho = (CHI[ng - 4]);
		longduc = (CHI[ng - 3]);
		xauphu = (CHI[ng - 2]);
		benhphu = (CHI[ng - 1]);
	}
	return [trucphu, thaiduong, ttphu, thaiam, quanphu, tuphu, tuepha, phucduc, bachho, longduc, xauphu, benhphu];
}
//////////Function Tinh Lục Thú
function $LucThu(jd) {
	var lt1, lt2, lt3, lt4, lt5, lt6;
	if((jd + 9) % 10 == 0 || (jd + 9) % 10 == 1) {
		lt1 = 'Thanh Long';
		lt2 = 'Chu Tước';
		lt3 = 'Câu Trần';
		lt4 = 'Đằng Xà';
		lt5 = 'Bạch Hổ';
		lt6 = 'Huyền Vũ';
	} else if((jd + 9) % 10 == 2 || (jd + 9) % 10 == 3) {
		lt1 = 'Chu Tước';
		lt2 = 'Câu Trần';
		lt3 = 'Đằng Xà';
		lt4 = 'Bạch Hổ';
		lt5 = 'Huyền Vũ';
		lt6 = 'Thanh Long';
	} else if((jd + 9) % 10 == 4) {
		lt1 = 'Câu Trần';
		lt2 = 'Đằng Xà';
		lt3 = 'Bạch Hổ';
		lt4 = 'Huyền Vũ';
		lt5 = 'Thanh Long';
		lt6 = 'Chu Tước';
	} else if((jd + 9) % 10 == 5) {
		lt1 = 'Đằng Xà';
		lt2 = 'Bạch Hổ';
		lt3 = 'Huyền Vũ';
		lt4 = 'Thanh Long';
		lt5 = 'Chu Tước';
		lt6 = 'Câu Trần';
	} else if((jd + 9) % 10 == 6 || (jd + 9) % 10 == 7) {
		lt1 = 'Bạch Hổ';
		lt2 = 'Huyền Vũ';
		lt3 = 'Thanh Long';
		lt4 = 'Chu Tước';
		lt5 = 'Câu Trần';
		lt6 = 'Đằng Xà';
	} else if((jd + 9) % 10 == 8 || (jd + 9) % 10 == 9) {
		lt1 = 'Huyền Vũ';
		lt2 = 'Thanh Long';
		lt3 = 'Chu Tước';
		lt4 = 'Câu Trần';
		lt5 = 'Đằng Xà';
		lt6 = 'Bạch Hổ';
	}
	return [lt1, lt2, lt3, lt4, lt5, lt6];
}
/////////Function tính Phản Ngâm , Phục Ngâm .
function PNPN(hd1, hd2, hd3, hd4, hd5, hd6, chi1, chi4, chi7, chi10) {
	var phucngam = '';
	var phanngam = '';
	if((hd1 == 1 || hd2 == 1 || hd3 == 1) && chi4 == chi10 && (hd4 == 1 || hd5 == 1 || hd6 == 1) && chi1 == chi7) {
		phucngam = 'Phục Ngâm.';
	} else if((hd4 == 1 || hd5 == 1 || hd6 == 1) && chi4 == chi10) {
		phucngam = 'Ngoại Phục Ngâm.';
	} else if((hd1 == 1 || hd2 == 1 || hd3 == 1) && chi1 == chi7) {
		phucngam = 'Nội Phục Ngâm.';
	} else phucngam = "";
	if(((hd4 == 1 || hd5 == 1 || hd6 == 1) && ((chi4 == 'Ngọ' && chi10 == 'Mùi') || (chi4 == 'Ngọ' && chi10 == 'Tý') ||
			(chi10 == 'Ngọ' && chi4 == 'Tý') ||
			(chi4 == 'Mùi' && chi10 == 'Ngọ') ||
			(chi4 == 'Mùi' && chi10 == 'Sửu') ||
			(chi10 == 'Mùi' && chi4 == 'Sửu') ||
			(chi4 == 'Thân' && chi10 == 'Dần') ||
			(chi10 == 'Thân' && chi4 == 'Dần') ||
			(chi4 == 'Tị' && chi10 == 'Hợi') ||
			(chi10 == 'Tị' && chi4 == 'Hợi') ||
			(chi4 == 'Mão' && chi10 == 'Dậu') ||
			(chi10 == 'Mão' && chi4 == 'Dậu') ||
			(chi4 == 'Tuất' && chi10 == 'Thìn') ||
			(chi10 == 'Tuất' && chi4 == 'Thìn'))) &&
		(hd1 == 1 || hd2 == 1 || hd3 == 1) &&
		(chi1 == 'Tý' && chi7 == 'Sửu') ||
		(chi7 == 'Tý' && chi1 == 'Sửu') ||
		(chi1 == 'Dần' && chi7 == 'Mão') ||
		(chi7 == 'Dần' && chi1 == 'Mão') ||
		(chi1 == 'Thìn' && chi7 == 'Mùi') ||
		(chi7 == 'Thìn' && chi1 == 'Mùi') ||
		(chi1 == 'Ngọ' && chi7 == 'Tý') ||
		(chi7 == 'Ngọ' && chi1 == 'Tý') ||
		(chi1 == 'Mùi' && chi7 == 'Sửu') ||
		(chi7 == 'Mùi' && chi1 == 'Sửu')) {
		phanngam = 'Phản Ngâm.';
	} else if((hd4 == 1 || hd5 == 1 || hd6 == 1) &&
		((chi4 == 'Ngọ' && chi10 == 'Mùi') ||
			(chi4 == 'Ngọ' && chi10 == 'Tý') ||
			(chi10 == 'Ngọ' && chi4 == 'Tý') ||
			(chi4 == 'Mùi' && chi10 == 'Ngọ') ||
			(chi4 == 'Mùi' && chi10 == 'Sửu') ||
			(chi10 == 'Mùi' && chi4 == 'Sửu') ||
			(chi4 == 'Thân' && chi10 == 'Dần') ||
			(chi10 == 'Thân' && chi4 == 'Dần') ||
			(chi4 == 'Tị' && chi10 == 'Hợi') ||
			(chi10 == 'Tị' && chi4 == 'Hợi') ||
			(chi4 == 'Mão' && chi10 == 'Dậu') ||
			(chi10 == 'Mão' && chi4 == 'Dậu') ||
			(chi4 == 'Tuất' && chi10 == 'Thìn') ||
			(chi10 == 'Tuất' && chi4 == 'Thìn'))) {
		phanngam = 'Ngoại Phản Ngâm.';
	} else if((hd1 == 1 || hd2 == 1 || hd3 == 1) &&
		(chi1 == 'Tý' && chi7 == 'Sửu') ||
		(chi7 == 'Tý' && chi1 == 'Sửu') ||
		(chi1 == 'Dần' && chi7 == 'Mão') ||
		(chi7 == 'Dần' && chi1 == 'Mão') ||
		(chi1 == 'Thìn' && chi7 == 'Mùi') ||
		(chi7 == 'Thìn' && chi1 == 'Mùi') ||
		(chi1 == 'Tý' && chi7 == 'Ngọ') ||
		(chi7 == 'Tý' && chi1 == 'Ngọ') ||
		(chi1 == 'Mùi' && chi7 == 'Sửu') ||
		(chi7 == 'Mùi' && chi1 == 'Sửu')) {
		phanngam = 'Nội Phản Ngâm.';
	}
	var phucphan = phucngam + " " + phanngam;
	return phucphan;
}
////////Thần Sát theo Chi Ngày
function $chingay(_chingay) {
	var dm, t, ks, ts, mt, hc;
	if(_chingay == 0 || _chingay == 8 || _chingay == 4) {
		dm = 'Dần';
		t = 'Tý';
		ks = 'Tị';
		ts = 'Ngọ';
		mt = 'Tuất';
		hc = 'Thìn';
	}
	if(_chingay == 5 || _chingay == 9 || _chingay == 1) {
		dm = 'Hợi';
		t = 'Dậu';
		ks = 'Dần';
		ts = 'Mão';
		mt = 'Mùi';
		hc = 'Sửu';
	}
	if(_chingay == 2 || _chingay == 6 || _chingay == 10) {
		dm = 'Thân';
		t = 'Ngọ';
		ks = 'Hợi';
		ts = 'Tý';
		mt = 'Thìn';
		hc = 'Tuất';
	}
	if(_chingay == 11 || _chingay == 3 || _chingay == 7) {
		dm = 'Tị';
		t = 'Mão';
		ks = 'Thân';
		ts = 'Dậu';
		mt = 'Sửu';
		hc = 'Mùi';
	}
	return [dm, mt, t, hc, ts, ks];
}
////////Thần Sát theo Can Ngày
function $canngay(_canngay) {
	var qn, lt, vx, td, dn;
	if(_canngay == 0) {
		lt = 'Dần';
		vx = 'Tị';
		dn = 'Mão';
	}
	if(_canngay == 1) {
		lt = 'Mão';
		vx = 'Ngọ';
		dn = 'Dần';
	}
	if(_canngay == 2 || _canngay == 4) {
		lt = 'Tị';
		vx = 'Thân';
		dn = 'Ngọ';
	}
	if(_canngay == 3 || _canngay == 5) {
		lt = 'Ngọ';
		vx = 'Dậu';
		dn = 'Tị';
	}
	if(_canngay == 6) {
		lt = 'Thân';
		vx = 'Hợi';
		dn = 'Dậu';
	}
	if(_canngay == 7) {
		lt = 'Dậu';
		vx = 'Tý';
		dn = 'Thân';
	}
	if(_canngay == 8) {
		lt = 'Hợi';
		vx = 'Dần';
		dn = 'Tý';
	}
	if(_canngay == 9) {
		lt = 'Tí';
		vx = 'Mão';
		dn = 'Hợi';
	}
	if(_canngay == 0 || _canngay == 4) {
		qn = 'Sửu,Mùi';
	}
	if(_canngay == 1 || _canngay == 5) {
		qn = 'Tý,Thân';
	}
	if(_canngay == 2 || _canngay == 3) {
		qn = 'Hợi,Dậu';
	}
	if(_canngay == 6 || _canngay == 7) {
		qn = 'Dần,Ngọ';
	}
	if(_canngay == 8 || _canngay == 9) {
		qn = 'Mão,Tị';
	}
	if(_canngay == 0) {
		td = 'Hào 5';
	}
	if(_canngay == 5) {
		td = 'Hào 6';
	}
	if((_canngay == 1) || (_canngay == 6)) {
		td = 'Hào 4';
	}
	if((_canngay == 9) || (_canngay == 4)) {
		td = 'Hào 2';
	}
	if((_canngay == 2) || (_canngay == 7)) {
		td = 'Hào 1';
	}
	if((_canngay == 3) || (_canngay == 8)) {
		td = 'Hào 3';
	}
	return [lt, qn, dn, vx, td];
}
/////////Thần Sát Theo Chi Tháng
function $chithang(_chithang) {
	var ht, ty, th;
	if(_chithang == 0 || _chithang == 8 || _chithang == 4) {
		ht = 'Dậu';
	}
	if(_chithang == 5 || _chithang == 9 || _chithang == 1) {
		ht = 'Ngọ';
	}
	if(_chithang == 2 || _chithang == 6 || _chithang == 10) {
		ht = 'Mão';
	}
	if(_chithang == 11 || _chithang == 3 || _chithang == 7) {
		ht = 'Tý';
	}
	if(_chithang == 0) {
		ty = "Hợi";
	}
	if(_chithang == 1) {
		ty = "Tý";
	}
	if(_chithang == 2) {
		ty = "Sửu";
	}
	if(_chithang == 3) {
		ty = "Dần";
	}
	if(_chithang == 4) {
		ty = "Mão";
	}
	if(_chithang == 5) {
		ty = "Thìn";
	}
	if(_chithang == 6) {
		ty = "Tị";
	}
	if(_chithang == 7) {
		ty = "Ngọ";
	}
	if(_chithang == 8) {
		ty = "Mùi";
	}
	if(_chithang == 9) {
		ty = "Thân";
	}
	if(_chithang == 10) {
		ty = "Dậu";
	}
	if(_chithang == 11) {
		ty = "Tuất";
	}
	if((_chithang == 0 || _chithang == 1 || _chithang == 11)) {
		th = "Mùi";
	}
	if((_chithang == 3 || _chithang == 2 || _chithang == 4)) {
		th = "Tuất";
	}
	if((_chithang == 5 || _chithang == 6 || _chithang == 7)) {
		th = "Sửu";
	}
	if((_chithang == 10 || _chithang == 9 || _chithang == 8)) {
		th = "Thìn";
	}
	return [ht, ty, th];
}
/////Function chính
function luchao() {
	var currentDate = parseInt(document.getElementById('ngay1').value);
	var currentMonth = parseInt(document.getElementById('thang1').value);
	var currentYear = parseInt(document.getElementById('nam1').value);
	var Std = parseInt(document.getElementById('gio1').value);
	var Min = parseInt(document.getElementById('phut1').value);
	if(Std == 23) {
		currentDate = currentDate + 1;
	}
	var lunarDate = getLunarDate(currentDate, currentMonth, currentYear);
	var yy = lunarDate.year;
	var mm = lunarDate.month;
	var dd = lunarDate.day;
	var jd = lunarDate.jd;
	var s1 = ((Std < 10) ? "0" + Std : Std);
	var s2 = ((Min < 10) ? "0" + Min : Min);
	var now = s1 + ":" + s2;
	var chiGio = (Std >= 23) ? 0 : INT((Std + 1) / 2);
	var canGio = ((jd - 1) * 2 + INT((Std + 1) / 2)) % 10;
	var dayOfWeek = TUAN[(jd + 1) % 7];
	var nhuan = (lunarDate.leap == 1) ? ' nhuận' : '';
	var nguyetlenh = '';
	var TuanGiap;
	var $Can = ((jd + 9) % 10);
	var $Chi = ((jd + 1) % 12);
	var count;
	var tk = '';
	for(count = $Can; count >= 0; count--) {
		TuanGiap = $Chi--;
		if(TuanGiap == 0 || TuanGiap == -12) {
			tk = "Hợi,Tuất"
		}
		if(TuanGiap == 2 || TuanGiap == -10) {
			tk = "Tý,Sửu"
		}
		if(TuanGiap == 4 || TuanGiap == -8) {
			tk = "Dần,Mão"
		}
		if(TuanGiap == 6 || TuanGiap == -6) {
			tk = "Thìn,Tị"
		}
		if(TuanGiap == 8 || TuanGiap == -4) {
			tk = "Ngọ,Mùi"
		}
		if(TuanGiap == 10 || TuanGiap == -2) {
			tk = "Thân,Dậu"
		}
	}
	if(TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Hạ chí' || TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Mang chủng') nguyetlenh = 'Ngọ'
	if(TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Tiểu thử' || TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Đại thử') nguyetlenh = 'Mùi'
	if(TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Lập thu' || TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Xử thử') nguyetlenh = 'Thân'
	if(TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Bạch lộ' || TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Thu phân') nguyetlenh = 'Dậu'
	if(TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Hàn lộ' || TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Sương giáng') nguyetlenh = 'Tuất'
	if(TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Tiểu tuyết' || TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Lập đông') nguyetlenh = 'Hợi'
	if(TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Đại tuyết' || TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Đông chí') nguyetlenh = 'Tý'
	if(TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Tiểu hàn' || TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Đại hàn') nguyetlenh = 'Sửu'
	if(TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Lập xuân' || TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Vũ thủy') nguyetlenh = 'Dần'
	if(TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Kinh trập' || TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Xuân phân') nguyetlenh = 'Mão'
	if(TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Thanh minh' || TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Cốc vũ') nguyetlenh = 'Thìn'
	if(TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Lập hạ' || TIETKHI[getSolarTerm(jd + 1, 7.0)] == 'Tiểu mãn') nguyetlenh = 'Tị'
	var thang = CAN[(yy * 12 + mm + 3) % 10] + " " + CHI[(mm + 1) % 12];
	var ngay = CAN[(jd + 9) % 10] + " " + CHI[(jd + 1) % 12];
	var chingay = CHI[(jd + 1) % 12];
	document.getElementById('amlich').innerHTML = 'Giờ ' + now + ' - ' + currentDate + '/' + currentMonth + '/' + currentYear + ' Dương Lịch ( ' + dd + '/' + mm + '/' + yy + ' Âmlịch )'
	document.getElementById('amlich1').innerHTML = 'Giờ ' + CAN[canGio] + ' ' + CHI[chiGio] + ' - ' + 'Ngày ' + ngay + ' - ' + 'Tháng ' + thang + ' - ' + 'Năm ' + getYearCanChi(yy) + '<br/>Tiết ' + TIETKHI[getSolarTerm(jd + 1, 7.0)] + ' - Nguyệt Lệnh: ' + nguyetlenh + ' - Tuần Không: ' + tk;
	var $h1 = parseInt(document.getElementById("hao1").value);
	var $h2 = parseInt(document.getElementById("hao2").value);
	var $h3 = parseInt(document.getElementById("hao3").value);
	var $h4 = parseInt(document.getElementById("hao4").value);
	var $h5 = parseInt(document.getElementById("hao5").value);
	var $h6 = parseInt(document.getElementById("hao6").value);
	var cb1 = document.getElementById('cb1');
	var cb2 = document.getElementById("cb2");
	var cb3 = document.getElementById("cb3");
	var cb4 = document.getElementById("cb4");
	var cb5 = document.getElementById("cb5");
	var cb6 = document.getElementById("cb6");
	/*var tq = (dd+mm+(((yy+8) % 12)+1))% 8 ;
	var nq = ((dd+mm+(((yy+8) % 12)+1))+(((Std >= 23) ? 0 : INT((Std + 1) / 2))+1))% 8 ;
	var hd = ((dd+mm+(((yy+8) % 12)+1))+(((Std >= 23) ? 0 : INT((Std + 1) / 2))+1))% 6 ;*/
	var h1 = document.getElementById("hinh1");
	var h2 = document.getElementById("hinh2");
	var h3 = document.getElementById("hinh3");
	var h4 = document.getElementById("hinh4");
	var h5 = document.getElementById("hinh5");
	var h6 = document.getElementById("hinh6");
	var h7 = document.getElementById('hinh7');
	var h8 = document.getElementById("hinh8");
	var h9 = document.getElementById("hinh9");
	var h10 = document.getElementById("hinh10");
	var h11 = document.getElementById("hinh11");
	var h12 = document.getElementById("hinh12");
	var h13 = document.getElementById("hinh13");
	var h14 = document.getElementById("hinh14");
	var h15 = document.getElementById("hinh15");
	var h16 = document.getElementById("hinh16");
	var h17 = document.getElementById("hinh17");
	var h18 = document.getElementById("hinh18");
	var hh1 = document.getElementById("hhinh1");
	var hh2 = document.getElementById("hhinh2");
	var hh3 = document.getElementById("hhinh3");
	var hh4 = document.getElementById("hhinh4");
	var hh5 = document.getElementById("hhinh5");
	var hh6 = document.getElementById("hhinh6");
	//var hh7 = document.getElementById("hhinh7");
	//var hh8 = document.getElementById("hhinh8");
	//var hh9 = document.getElementById("hhinh9");
	//var hh10 = document.getElementById("hhinh10");
	//var hh11 = document.getElementById("hhinh11");
	//var hh12 = document.getElementById("hhinh12");
	/// Tính ra chuỗi 0,1
	var nqq, tqq;
	var flagtq, flagnq;
	var hd1 = hd2 = hd3 = hd4 = hd5 = hd6 = 0;
	//// Thượng Quái
	if($h4 == 0 && $h5 == 0 && $h6 == 0) {
		h4.setAttribute('src', HaoAm);
		h5.setAttribute('src', HaoAm);
		h6.setAttribute('src', HaoAm);
		tqq = [0, 0, 0];
		flagtq = 8;
	}
	if($h4 == 1 && $h5 == 1 && $h6 == 1) {
		h4.setAttribute('src', HaoDuong);
		h5.setAttribute('src', HaoDuong);
		h6.setAttribute('src', HaoDuong);
		tqq = [1, 1, 1];
		flagtq = 1;
	}
	if($h4 == 1 && $h5 == 1 && $h6 == 0) {
		h4.setAttribute('src', HaoDuong);
		h5.setAttribute('src', HaoDuong);
		h6.setAttribute('src', HaoAm);
		tqq = [1, 1, 0];
		flagtq = 2;
	}
	if($h4 == 1 && $h5 == 0 && $h6 == 1) {
		h4.setAttribute('src', HaoDuong);
		h5.setAttribute('src', HaoAm);
		h6.setAttribute('src', HaoDuong);
		tqq = [1, 0, 1];
		flagtq = 3;
	}
	if($h4 == 1 && $h5 == 0 && $h6 == 0) {
		h4.setAttribute('src', HaoDuong);
		h5.setAttribute('src', HaoAm);
		h6.setAttribute('src', HaoAm);
		tqq = [1, 0, 0];
		flagtq = 4;
	}
	if($h4 == 0 && $h5 == 1 && $h6 == 1) {
		h4.setAttribute('src', HaoAm);
		h5.setAttribute('src', HaoDuong);
		h6.setAttribute('src', HaoDuong);
		tqq = [0, 1, 1];
		flagtq = 5;
	}
	if($h4 == 0 && $h5 == 1 && $h6 == 0) {
		h4.setAttribute('src', HaoAm);
		h5.setAttribute('src', HaoDuong);
		h6.setAttribute('src', HaoAm);
		tqq = [0, 1, 0];
		flagtq = 6;
	}
	if($h4 == 0 && $h5 == 0 && $h6 == 1) {
		h4.setAttribute('src', HaoAm);
		h5.setAttribute('src', HaoAm);
		h6.setAttribute('src', HaoDuong);
		tqq = [0, 0, 1];
		flagtq = 7;
	}
	//// Nội Quái
	if($h1 == 0 && $h2 == 0 && $h3 == 0) {
		h1.setAttribute('src', HaoAm);
		h2.setAttribute('src', HaoAm);
		h3.setAttribute('src', HaoAm);
		nqq = [0, 0, 0];
		flagnq = 8;
	}
	if($h1 == 1 && $h2 == 1 && $h3 == 1) {
		h1.setAttribute('src', HaoDuong);
		h2.setAttribute('src', HaoDuong);
		h3.setAttribute('src', HaoDuong);
		nqq = [1, 1, 1];
		flagnq = 1;
	}
	if($h1 == 1 && $h2 == 1 && $h3 == 0) {
		h1.setAttribute('src', HaoDuong);
		h2.setAttribute('src', HaoDuong);
		h3.setAttribute('src', HaoAm);
		nqq = [1, 1, 0];
		flagnq = 2;
	}
	if($h1 == 1 && $h2 == 0 && $h3 == 1) {
		h1.setAttribute('src', HaoDuong);
		h2.setAttribute('src', HaoAm);
		h3.setAttribute('src', HaoDuong);
		nqq = [1, 0, 1];
		flagnq = 3;
	}
	if($h1 == 1 && $h2 == 0 && $h3 == 0) {
		h1.setAttribute('src', HaoDuong);
		h2.setAttribute('src', HaoAm);
		h3.setAttribute('src', HaoAm);
		nqq = [1, 0, 0];
		flagnq = 4;
	}
	if($h1 == 0 && $h2 == 1 && $h3 == 1) {
		h1.setAttribute('src', HaoAm);
		h2.setAttribute('src', HaoDuong);
		h3.setAttribute('src', HaoDuong);
		nqq = [0, 1, 1];
		flagnq = 5;
	}
	if($h1 == 0 && $h2 == 1 && $h3 == 0) {
		h1.setAttribute('src', HaoAm);
		h2.setAttribute('src', HaoDuong);
		h3.setAttribute('src', HaoAm);
		nqq = [0, 1, 0];
		flagnq = 6;
	}
	if($h1 == 0 && $h2 == 0 && $h3 == 1) {
		h1.setAttribute('src', HaoAm);
		h2.setAttribute('src', HaoAm);
		h3.setAttribute('src', HaoDuong);
		nqq = [0, 0, 1];
		flagnq = 7;
	}
	//////////Quẻ Chính
	///// Têm Quẻ Chính
	document.getElementById('tenquechinh').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[0];
	//////////An lục Thân
	document.getElementById('lucthan1').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[1];
	document.getElementById('lucthan2').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[2];
	document.getElementById('lucthan3').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[3];
	document.getElementById('lucthan4').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[4];
	document.getElementById('lucthan5').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[5];
	document.getElementById('lucthan6').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[6];
	///////An Chi
	document.getElementById('chi1').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[7];
	document.getElementById('chi2').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[8];
	document.getElementById('chi3').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[9];
	document.getElementById('chi4').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[10];
	document.getElementById('chi5').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[11];
	document.getElementById('chi6').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[12];
	///////////// Tuần Không
	var gfdgfd = 'Tị';
	//document.getElementById('tk1').innerHTML=tuankhong(jd,($TenQue(nqq[0],nqq[1],nqq[2],tqq[0],tqq[1],tqq[2])[7]).slice(2));
	//document.getElementById('tk2').innerHTML=tuankhong(jd,($TenQue(nqq[0],nqq[1],nqq[2],tqq[0],tqq[1],tqq[2])[8]).slice(2));
	//document.getElementById('tk3').innerHTML=tuankhong(jd,($TenQue(nqq[0],nqq[1],nqq[2],tqq[0],tqq[1],tqq[2])[9]).slice(2));
	//document.getElementById('tk4').innerHTML=tuankhong(jd,($TenQue(nqq[0],nqq[1],nqq[2],tqq[0],tqq[1],tqq[2])[10]).slice(2));
	//document.getElementById('tk5').innerHTML=tuankhong(jd,($TenQue(nqq[0],nqq[1],nqq[2],tqq[0],tqq[1],tqq[2])[11]).slice(2));
	//document.getElementById('tk6').innerHTML=tuankhong(jd,($TenQue(nqq[0],nqq[1],nqq[2],tqq[0],tqq[1],tqq[2])[12]).slice(2));
	///////An Phục Thân
	document.getElementById('phuc1').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[13];
	document.getElementById('phuc2').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[14];
	document.getElementById('phuc3').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[15];
	document.getElementById('phuc4').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[16];
	document.getElementById('phuc5').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[17];
	document.getElementById('phuc6').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[18];
	///////Thế Ứng
	document.getElementById('tu1').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[19];
	document.getElementById('tu2').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[20];
	document.getElementById('tu3').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[21];
	document.getElementById('tu4').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[22];
	document.getElementById('tu5').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[23];
	document.getElementById('tu6').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[24];
	//////// 6 Chi Quẻ Chính
	var chi1 = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[7].slice(2);
	var chi2 = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[8].slice(2);
	var chi3 = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[9].slice(2);
	var chi4 = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[10].slice(2);
	var chi5 = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[11].slice(2);
	var chi6 = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[12].slice(2);
	//////////Cung và Tượng 26 tuongque 27 cung
	document.getElementById('cungqc').innerHTML = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[27] + $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[26];
	/////////Hình Hổ Quái
	if(h2.getAttribute('src') == HaoDuong) {
		h7.setAttribute('src', HaoDuong);
	} else if(h2.getAttribute('src') == HaoDuongDong) {
		h7.setAttribute('src', HaoDuong);
	} else {
		h7.setAttribute('src', HaoAm);
	}
	if(h3.getAttribute('src') == HaoDuong) {
		h8.setAttribute('src', HaoDuong);
	} else if(h3.getAttribute('src') == HaoDuongDong) {
		h8.setAttribute('src', HaoDuong);
	} else {
		h8.setAttribute('src', HaoAm);
	}
	if(h4.getAttribute('src') == HaoDuong) {
		h9.setAttribute('src', HaoDuong);
	} else if(h4.getAttribute('src') == HaoDuongDong) {
		h9.setAttribute('src', HaoDuong);
	} else {
		h9.setAttribute('src', HaoAm);
	}
	if(h3.getAttribute('src') == HaoDuong) {
		h10.setAttribute('src', HaoDuong);
	} else if(h3.getAttribute('src') == HaoDuongDong) {
		h10.setAttribute('src', HaoDuong);
	} else {
		h10.setAttribute('src', HaoAm);
	}
	if(h4.getAttribute('src') == HaoDuong) {
		h11.setAttribute('src', HaoDuong);
	} else if(h4.getAttribute('src') == HaoDuongDong) {
		h11.setAttribute('src', HaoDuong);
	} else {
		h11.setAttribute('src', HaoAm);
	}
	if(h5.getAttribute('src') == HaoDuong) {
		h12.setAttribute('src', HaoDuong);
	} else if(h5.getAttribute('src') == HaoDuongDong) {
		h12.setAttribute('src', HaoDuong);
	} else {
		h12.setAttribute('src', HaoAm);
	}
	////// Tên Hỗ Quẻ
	document.getElementById('tenqueho').innerHTML = $TenQue(nqq[1], nqq[2], tqq[0], nqq[2], tqq[0], tqq[1])[0];
	/////// Hào Động
	var hbnq = new Array;
	var hbtq = new Array;
	//alert(tqq);
	//alert(nqq);
	if(cb1.checked === true && nqq[0] == 0) {
		h1.setAttribute('src', HaoAmDong);
		hbnq[0] = 1;
	} else if(cb1.checked === true && nqq[0] == 1) {
		h1.setAttribute('src', HaoDuongDong);
		hbnq[0] = 0;
	} else hbnq[0] = nqq[0];
	if(cb2.checked === true && nqq[1] == 0) {
		h2.setAttribute('src', HaoAmDong);
		hbnq[1] = 1;
	} else if(cb2.checked === true && nqq[1] == 1) {
		h2.setAttribute('src', HaoDuongDong);
		hbnq[1] = 0;
	} else hbnq[1] = nqq[1];
	if(cb3.checked === true && nqq[2] == 0) {
		h3.setAttribute('src', HaoAmDong);
		hbnq[2] = 1;
	} else if(cb3.checked === true && nqq[2] == 1) {
		h3.setAttribute('src', HaoDuongDong);
		hbnq[2] = 0;
	} else hbnq[2] = nqq[2];
	/////// Động ở ngoại quá
	if(cb4.checked === true && tqq[0] == 0) {
		h4.setAttribute('src', HaoAmDong);
		hbtq[0] = 1;
	} else if(cb4.checked === true && tqq[0] == 1) {
		h4.setAttribute('src', HaoDuongDong);
		hbtq[0] = 0;
	} else hbtq[0] = tqq[0];
	if(cb5.checked === true && tqq[1] == 1) {
		h5.setAttribute('src', HaoDuongDong);
		hbtq[1] = 0;
	} else if(cb5.checked === true && tqq[1] == 0) {
		h5.setAttribute('src', HaoAmDong);
		hbtq[1] = 1;
	} else hbtq[1] = tqq[1];
	if(cb6.checked === true && tqq[2] == 0) {
		h6.setAttribute('src', HaoAmDong);
		hbtq[2] = 1;
	} else if(cb6.checked === true && tqq[2] == 1) {
		h6.setAttribute('src', HaoDuongDong);
		hbtq[2] = 0;
	} else hbtq[2] = tqq[2];
	///////////// Quẻ Biến
	if(h1.getAttribute('src') == HaoDuongDong) {
		h13.setAttribute('src', HaoAm);
	} else if(h1.getAttribute('src') == HaoAmDong) {
		h13.setAttribute('src', HaoDuong);
	} else {
		h13.setAttribute('src', h1.getAttribute('src'));
	}
	if(h2.getAttribute('src') == HaoDuongDong) {
		h14.setAttribute('src', HaoAm);
	} else if(h2.getAttribute('src') == HaoAmDong) {
		h14.setAttribute('src', HaoDuong);
	} else {
		h14.setAttribute('src', h2.getAttribute('src'));
	}
	if(h3.getAttribute('src') == HaoDuongDong) {
		h15.setAttribute('src', HaoAm);
	} else if(h3.getAttribute('src') == HaoAmDong) {
		h15.setAttribute('src', HaoDuong);
	} else {
		h15.setAttribute('src', h3.getAttribute('src'));
	}
	if(h4.getAttribute('src') == HaoDuongDong) {
		h16.setAttribute('src', HaoAm);
	} else if(h4.getAttribute('src') == HaoAmDong) {
		h16.setAttribute('src', HaoDuong);
	} else {
		h16.setAttribute('src', h4.getAttribute('src'));
	}
	if(h5.getAttribute('src') == HaoDuongDong) {
		h17.setAttribute('src', HaoAm);
	} else if(h5.getAttribute('src') == HaoAmDong) {
		h17.setAttribute('src', HaoDuong);
	} else {
		h17.setAttribute('src', h5.getAttribute('src'));
	}
	if(h6.getAttribute('src') == HaoDuongDong) {
		h18.setAttribute('src', HaoAm);
	} else if(h6.getAttribute('src') == HaoAmDong) {
		h18.setAttribute('src', HaoDuong);
	} else {
		h18.setAttribute('src', h6.getAttribute('src'));
	}
	/////////// Tên Quẻ Biến
	document.getElementById('tenquebien').innerHTML = $TenQue(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2])[0];
	///////////
	document.getElementById('cungqb').innerHTML = $TenQue(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2])[27] + $TenQue(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2])[26];
	////// Hình Nhỏ
	hh1.setAttribute('src', h1.getAttribute('src'));
	hh2.setAttribute('src', h2.getAttribute('src'));
	hh3.setAttribute('src', h3.getAttribute('src'));
	hh4.setAttribute('src', h4.getAttribute('src'));
	hh5.setAttribute('src', h5.getAttribute('src'));
	hh6.setAttribute('src', h6.getAttribute('src'));
	//	hh7.setAttribute('src',h13.getAttribute('src'));
	//	hh8.setAttribute('src',h14.getAttribute('src'));
	//	hh9.setAttribute('src',h15.getAttribute('src'));
	//	hh10.setAttribute('src',h16.getAttribute('src'));
	//	hh11.setAttribute('src',h17.getAttribute('src'));
	//	hh12.setAttribute('src',h18.getAttribute('src'));
	//////////Quẻ Biến
	//////////An lục Thân Quẻ Biến
	var nguhanh = $TenQue(nqq[0], nqq[1], nqq[2], tqq[0], tqq[1], tqq[2])[25];
	document.getElementById('lucthan7').innerHTML = $ltqb(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2], nguhanh)[0];
	document.getElementById('lucthan8').innerHTML = $ltqb(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2], nguhanh)[1];
	document.getElementById('lucthan9').innerHTML = $ltqb(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2], nguhanh)[2];
	document.getElementById('lucthan10').innerHTML = $ltqb(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2], nguhanh)[3];
	document.getElementById('lucthan11').innerHTML = $ltqb(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2], nguhanh)[4];
	document.getElementById('lucthan12').innerHTML = $ltqb(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2], nguhanh)[5];
	///////An Chi Quẻ Biến
	document.getElementById('chi7').innerHTML = $TenQue(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2])[7];
	document.getElementById('chi8').innerHTML = $TenQue(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2])[8];
	document.getElementById('chi9').innerHTML = $TenQue(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2])[9];
	document.getElementById('chi10').innerHTML = $TenQue(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2])[10];
	document.getElementById('chi11').innerHTML = $TenQue(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2])[11];
	document.getElementById('chi12').innerHTML = $TenQue(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2])[12];
	///////Thế Ứng Quẻ Biến
	document.getElementById('tu7').innerHTML = $TenQue(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2])[19];
	document.getElementById('tu8').innerHTML = $TenQue(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2])[20];
	document.getElementById('tu9').innerHTML = $TenQue(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2])[21];
	document.getElementById('tu10').innerHTML = $TenQue(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2])[22];
	document.getElementById('tu11').innerHTML = $TenQue(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2])[23];
	document.getElementById('tu12').innerHTML = $TenQue(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2])[24];
	////////////Tuần Không Quẻ Biến
	//document.getElementById('tk7').innerHTML=tuankhong(jd,($TenQue(hbnq[0],hbnq[1],hbnq[2],hbtq[0],hbtq[1],hbtq[2])[7]).slice(2));
	//document.getElementById('tk8').innerHTML=tuankhong(jd,($TenQue(hbnq[0],hbnq[1],hbnq[2],hbtq[0],hbtq[1],hbtq[2])[8]).slice(2));
	//document.getElementById('tk9').innerHTML=tuankhong(jd,($TenQue(hbnq[0],hbnq[1],hbnq[2],hbtq[0],hbtq[1],hbtq[2])[9]).slice(2));
	//document.getElementById('tk10').innerHTML=tuankhong(jd,($TenQue(hbnq[0],hbnq[1],hbnq[2],hbtq[0],hbtq[1],hbtq[2])[10]).slice(2));
	//document.getElementById('tk11').innerHTML=tuankhong(jd,($TenQue(hbnq[0],hbnq[1],hbnq[2],hbtq[0],hbtq[1],hbtq[2])[11]).slice(2));
	//document.getElementById('tk12').innerHTML=tuankhong(jd,($TenQue(hbnq[0],hbnq[1],hbnq[2],hbtq[0],hbtq[1],hbtq[2])[12]).slice(2));
	////////////Lục Thú
	document.getElementById('lucthu1').innerHTML = $LucThu(jd)[0];
	document.getElementById('lucthu2').innerHTML = $LucThu(jd)[1];
	document.getElementById('lucthu3').innerHTML = $LucThu(jd)[2];
	document.getElementById('lucthu4').innerHTML = $LucThu(jd)[3];
	document.getElementById('lucthu5').innerHTML = $LucThu(jd)[4];
	document.getElementById('lucthu6').innerHTML = $LucThu(jd)[5];
	//////////6 Chi Quẻ Biến
	var chi7 = $TenQue(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2])[7].slice(2);
	var chi8 = $TenQue(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2])[8].slice(2);
	var chi9 = $TenQue(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2])[9].slice(2);
	var chi10 = $TenQue(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2])[10].slice(2);
	var chi11 = $TenQue(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2])[11].slice(2);
	var chi12 = $TenQue(hbnq[0], hbnq[1], hbnq[2], hbtq[0], hbtq[1], hbtq[2])[12].slice(2);
	//alert(hbtq);
	//alert(hbnq);
	//////PhucNgam,PhanNgam
	if(cb1.checked === true) {
		hd1 = 1;
	}
	if(cb2.checked === true) {
		hd2 = 1;
	}
	if(cb3.checked === true) {
		hd3 = 1;
	}
	if(cb4.checked === true) {
		hd4 = 1;
	}
	if(cb5.checked === true) {
		hd5 = 1;
	}
	if(cb6.checked === true) {
		hd6 = 1;
	}
	document.getElementById('phucphan').innerHTML = PNPN(hd1, hd2, hd3, hd4, hd5, hd6, chi1, chi4, chi7, chi10);
	///////// Thần Sát 
	document.getElementById('dichma').innerHTML = $chingay((jd + 1) % 12)[0];
	document.getElementById('muutinh').innerHTML = $chingay((jd + 1) % 12)[1];
	document.getElementById('tuong').innerHTML = $chingay((jd + 1) % 12)[2];
	document.getElementById('hoacai').innerHTML = $chingay((jd + 1) % 12)[3];
	document.getElementById('taisat').innerHTML = $chingay((jd + 1) % 12)[4];
	document.getElementById('kiepsat').innerHTML = $chingay((jd + 1) % 12)[5];
	document.getElementById('locton').innerHTML = $canngay((jd + 9) % 10)[0];
	document.getElementById('quinhan').innerHTML = $canngay((jd + 9) % 10)[1];
	document.getElementById('duongnhan').innerHTML = $canngay((jd + 9) % 10)[2];
	document.getElementById('vanxuong').innerHTML = $canngay((jd + 9) % 10)[3];
	document.getElementById('tiendong').innerHTML = $canngay((jd + 9) % 10)[4];
	document.getElementById('hamtri').innerHTML = $chithang((mm + 1) % 12)[0];
	document.getElementById('thieny').innerHTML = $chithang((mm + 1) % 12)[1];
	document.getElementById('thienhi').innerHTML = $chithang((mm + 1) % 12)[2];
	/////////// Liên Sơn
	//document.getElementById('trucphu').innerHTML=nk(yy)[0];
	//document.getElementById('thaiduong').innerHTML=nk(yy)[1];
	//document.getElementById('ttphu').innerHTML=nk(yy)[2];
	//document.getElementById('thaiam').innerHTML=nk(yy)[3];
	//document.getElementById('quanphu').innerHTML=nk(yy)[4];
	//document.getElementById('tuphu').innerHTML=nk(yy)[5];
	//document.getElementById('tuepha').innerHTML=nk(yy)[6];
	//document.getElementById('phucduc').innerHTML=nk(yy)[7];
	//document.getElementById('bachho').innerHTML=nk(yy)[8];
	//document.getElementById('longduc').innerHTML=nk(yy)[9];
	//document.getElementById('xauphu').innerHTML=nk(yy)[10];
	//document.getElementById('benhphu').innerHTML=nk(yy)[11];
	///////////////
	document.getElementById('tenquechinh').setAttribute('style', 'width:250px');
	document.getElementById('tenquebien').setAttribute('style', 'width:250px');
	document.getElementById('tenqueho').setAttribute('style', 'width:250px');

	const ele = $('#screenshot').get(0);

	const copy_ele = ele.cloneNode(true);
	
	const scrollW = ele.scrollWidth;
	const scrollH = ele.scrollHeight;

	var f = "quedich";
	$('#preview').empty();
	$('#screenshot').show();
	$('body').css('overflow-y','hidden');

	html2canvas($('#screenshot').get(0), {
		useCORS: true,
	}).then(function(canvas){
		var canvasWidth = scrollW;
		var canvasHeight = scrollH;
		console.log(scrollW + '\n');
		console.log(scrollH + '\n');

		var img = Canvas2Image.convertToImage(canvas, canvasWidth, canvasHeight);
		$('#preview').prepend(img);

		$('#screenshot').hide();
		$('body').css('overflow-y','scroll');
	});
}