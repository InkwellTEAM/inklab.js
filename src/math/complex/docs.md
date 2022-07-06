# Complex numbers

## 1. Defining complex numbers<br />

a) With cartesian coordinates (a + bi)<br />
<code>
const complexNum = new Complex([a, b])
</code><br />
or<br />
<code>
const commplexNum = new Complex([a, b], 'c')
</code><br /><br />
b) With polar coordinates (r\*e^iθ)<br />
<code>
const complexNum = new Complex([r, theta], 'p')
</code>

## 2. Operations on complex numbers<br />

a) Addition<br />
<code>
const c1 = new Complex([1, 2])<br />
const c2 = new Complex([3, 4])<br />
<br />
const c3 = c1.add(c2)<br />
// c3.re = 4<br />
// c3.im = 6
</code><br /><br /> 2. Subtraction<br />
<code>
const c1 = new Complex([5, 8])<br />
const c2 = new Complex([1, 5])<br />
<br />
const c3 = c1.sub(c2)<br />
// c3.re = 4<br />
// c3.im = 3
</code><br /><br />
c) Multiplication<br />
<code>
const c1 = new Complex([1, 2])<br />
const c2 = new Complex([3, 4])<br />
<br />
const c3 = c1.mulBy(c2)<br />
// c3.re = -5<br />
// c3.im = 10
</code><br /><br />
c) Division<br />
<code>
const c1 = new Complex([1, 2])<br />
const c2 = new Complex([3, 4])<br />
<br />
const c3 = c1.divBy(c2)<br />
// c3.re = 0.44<br />
// c3.im = 0.08
</code><br /><br />
