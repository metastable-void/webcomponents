
import {ScrollView} from './view/ScrollView.mjs';

const view = new ScrollView;
document.body.append(view);

for (let i = 0; i < 100; i++) {
  const p = document.createElement('p');
  p.append(`Paragraph #${i+1}`);
  view.append(p);
}

