Array
.from(contactDays)
.filter((checkbox) => checkbox.checked)
.map((checkbox) => checkbox.value);