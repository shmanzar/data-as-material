// Total credit to Rita.js documentation  https://rednoise.org/rita/examples/p5/ReplaceableWriting/index.html#source

let txt = `is even more fun than going to San Sebastian, Irún, Hendaye, Biarritz, Bayonne
or being sick to my stomach on the Travesera de Gracia in Barcelona
partly because in your orange shirt you look like a better happier St. Sebastian
partly because of my love for you, partly because of your love for yoghurt
partly because of the fluorescent orange tulips around the birches
partly because of the secrecy our smiles take on before people and statuary
it is hard to believe when I’m with you that there can be anything as still
as solemn as unpleasantly definitive as statuary when right in front of it
in the warm New York 4 o’clock light we are drifting back and forth
between each other like a tree breathing through its spectacles

and the portrait show seems to have no faces in it at all, just paint
you suddenly wonder why in the world anyone ever did them
                                                                                                              I look
at you and I would rather look at you than all the portraits in the world
except possibly for the Polish Rider occasionally and anyway it’s in the Frick
which thank heavens you haven’t gone to yet so we can go together for the first time
and the fact that you move so beautifully more or less takes care of Futurism
just as at home I never think of the Nude Descending a Staircase or
at a rehearsal a single drawing of Leonardo or Michelangelo that used to wow me
and what good does all the research of the Impressionists do them
when they never got the right person to stand near the tree when the sun sank
or for that matter Marino Marini when he didn’t pick the rider as carefully
as the horse
                               it seems they were all cheated of some marvelous experience
which is not going to go wasted on me which is why I’m telling you about it
`;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight).parent("#cdiv");
  noStroke();
  textSize(22);
  // textAlign(CENTER, CENTER);
  loadFont("./Inter-Regular.ttf", nextWord);
}

// replace one random word in the text
function nextWord() {
  // let words = RiTa.tokenize(txt); // split into words
  let doc = nlp(txt);
  doc.verbs().toPastTense();
  console.log(doc.text());

  // loop from a random spot
  let r = floor(random(0, words.length));
  for (let i = r; i < words.length + r; i++) {
    let idx = i % words.length;
    let word = words[idx].toLowerCase();
    if (word.length < 3) continue; // len >= 3

    // find related words
    let pos = RiTa.tagger.allTags(word)[0];
    let rhymes = RiTa.rhymes(word, { pos });
    let sounds = RiTa.soundsLike(word, { pos });
    let spells = RiTa.spellsLike(word, { pos });
    let similars = [...rhymes, ...sounds, ...spells];

    // only words with 2 or more similars
    if (similars.length < 2) {
      console.log("No substitute for " + word);
      continue;
    }

    // pick a random similar
    let next = RiTa.random(similars);

    if (next.includes(word) || word.includes(next)) {
      continue; // skip substrings
    }
    if (/[A-Z]/.test(words[idx][0])) {
      next = RiTa.capitalize(next); // keep capitals
    }

    console.log("replace(" + idx + "): " + word + " -> " + next);

    words[idx] = next; // do replacement
    var changes = document.getElementById("change");

    changes.textContent = word;
    var og_text = document.getElementById("word");

    og_text.textContent = next;

    break;
  }

  // recombine into string and display
  txt = RiTa.untokenize(words);
  background(255, 240, 245);
  fill(47, 79, 79);
  text("Having a Coke with You", 600, 100, 1000, height);
  text("by Frank O'Hara", 630, 150, 1000, height);
  text(txt, 300, 250, 900, height);

  setTimeout(nextWord, 1500);
}
