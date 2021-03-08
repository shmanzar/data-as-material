const billy = document.getElementById("billy");
const indicator = document.getElementById("indicator");
const b = baffle(document.querySelector(".text"));
let txt = `Having a Coke with You is enough to make me sick
and I suspect this is because I look upon you with adoration;
  Even so your sweet name makes my head spin;
  For I, who have not put many first in mind,
  Upon your name shall fame beauteous titles,
  And I shall be a sole his due, able to make him live
    If my slight ill-will with you with him lead me away
    As I am farther from you as you from me,
    Spend more of your wealth upon me, more than upon you,
    Love, Fortune, or all my Others for that matter.
  
  Love is a fool's love, and a miser's love,
  When in truth thou provest my wit,
  By praising that which still doth grow?
  Love is so preposterously false,
  That in it the world's waste and waste's shame,
  And in it the world's part is conceded,
  For truth itself doth play the tyrants to his sight;
    And that his glory doth conceal his abuses.

    At evening and day
partly because of the cold but partly because of the promise
of the night,
partly because of the maiden air
partly because of the safety of the cold,
partly because of the peace of well being
partly every part, every part wert thou when thou twilight
insafes my pain,
and looks on heaven but dims thy pain,
and looks on me but with my pain,
and thinks on me but poorly,
and gives no kind of comfort to me
except that this unfair privilege
which so unjustly is denied
in this age by your act of love.
    
    `;

document.querySelector("#billy").addEventListener("click", () => {
  indicator.classList.add("indvisible");
  b.start()
    .set({ speed: 100 })
    .text((text) => txt)
    .reveal(3000);
});

document.querySelector("#reset").addEventListener("click", () => {
  indicator.classList.remove("indvisible");
  document.querySelector(
    ".text"
  ).innerHTML = `is even more fun than going to San Sebastian, Irún, Hendaye, Biarritz, Bayonne
    or being sick to my stomach on 
    the Travesera de Gracia in Barcelona
    partly because in your orange shirt you look like a better happier St. Sebastian
    partly because of my love for you, partly because of your love for yoghurt
    partly because of the fluorescent orange tulips around the birches
    partly because of the secrecy our smiles take on before people and statuary
    it is hard to believe when I’m with you that there can be anything as still
    as solemn as unpleasantly definitive as statuary when right in front of it
    in the warm New York 4 o’clock light we are drifting back and forth
    between each other like a tree breathing through its spectacles
    
    and the portrait show seems to have no faces in it at all, just paint
    you suddenly wonder why in the world anyone ever did them this way
                                  
              I look at you and I would rather look at you than all the portraits in the world
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
    which is not going to go wasted on me which is why I’m telling you about it`;
});
