const subHeader = document.getElementById('sub-header');
const inputCollectionDiv = document.getElementsByClassName('input-collection-div')[0];
const signAlterBtn = document.getElementById('sign-alter-btn');
const form = document.getElementsByTagName('form')[0];
const signSelf = document.getElementsByClassName('sign-self')[0];
var inputFields = Array.from(document.getElementsByClassName('input-field'));

signAlterBtn.addEventListener('click', () => {

	let formNow = signAlterBtn.classList[1];

	if (formNow == 'sign-in-now') {

		inputCollectionDiv.style.gap = "1em";

		inputCollectionDiv.innerHTML = '<input class="input-field" type="text" name="name" placeholder="ناوی بەکارھێنەر" required><input class="input-field" type="email" name="email" placeholder="نامەبەری ئەلکترۆنی" required><input class="input-field" type="password" name="password" placeholder="تێپەڕەوشە" required><input class="input-field" type="password" name="passwordConfirm" placeholder="دڵنیابوونەوە لە تێپەڕەوشە" required>';

		signAlterBtn.innerText = "یاخود ھەژماری دروستکراوت بەکاربھێنە"

		subHeader.innerHTML = 'ھەژمارێک دروست بکە، تا لەیەک نزیکتربین <i class="fas fa-heart sub-header-icon"></i>';

		signAlterBtn.classList.replace('sign-in-now', 'sign-up-now');

		signSelf.innerText = 'ھەژمار دروستکردن'

	} else if (formNow == 'sign-up-now') {

		inputCollectionDiv.style.gap = "2em";

		inputCollectionDiv.innerHTML = '<input class="input-field" type="text" name="emailOrUserName" placeholder="ناوی بەکارھێنەر یان نامەبەری ئەلکترۆنی" required><input class="input-field" type="password" name="password" placeholder="تێپەڕەوشە" required>';

		signAlterBtn.innerText = "یاخود ھەژمار دروست بکە"

		subHeader.innerHTML = 'خۆشحاڵین بە بینینەوەت، خێرا خۆوکە ژوورا <i class="far fa-laugh-beam account-now-icon"></i>';

		signAlterBtn.classList.replace('sign-up-now', 'sign-in-now');

		signSelf.innerText = 'چوونە ژوورەوە'

	}

	inputFields = Array.from(document.getElementsByClassName('input-field'));
	rtlToLtr();
});

function rtlToLtr() {
	inputFields.forEach(element => {
		element.onkeyup = (event) => {

			innerText = event.target.value;

			if ((innerText.length) == 0) {
				element.classList.remove('english-text')
				element.style.padding = "2% 1% 2% 5%";
				event.target.style.direction = "rtl"
			} else {
				element.classList.add('english-text');
				element.style.padding = "2% 5% 2% 1%";
				event.target.style.direction = "ltr"
			}
		}
	});
}

rtlToLtr();