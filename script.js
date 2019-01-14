$(function(){ // DOCUMENT READY

	const tarotCards = [
		{
			name: "The Fool",
			past: "The Fool is a card of new beginnings, opportunity and potential. Just like the young man, you are at the outset of your journey, standing at the cliff‘s edge, and about to take your first step into the unknown. In the Past position, this card speaks to a new found clarity. What do you know now that you did not before?",
			present: "The Fool is a card of new beginnings, opportunity and potential. Just like the young man, you are at the outset of your journey, standing at the cliff‘s edge, and about to take your first step into the unknown. In the Present position, this card speaks to the value of now. You do not need all the answers to press onward.",
			future: "The Fool is a card of new beginnings, opportunity and potential. Just like the young man, you are at the outset of your journey, standing at the cliff‘s edge, and about to take your first step into the unknown. In the Future position, this card draws you forward into that unknown. Embrace it.",
			class: "the-fool"
		},
		{
			name: "The Magician",
			past: "As a master manifestor, the Magician brings you the tools, resources, and energy you need to make your dreams come true. The key is to bring these tools together so that the impact of what you create is greater than the separate parts. As a Past card, this indicates a missed opportunity. You were ready. Don't second guess your abilities.",
			present: "As a master manifestor, the Magician brings you the tools, resources, and energy you need to make your dreams come true. The key is to bring these tools together so that the impact of what you create is greater than the separate parts. In your Present, this card is urging you to action. You are ready.",
			future: "As a master manifestor, the Magician brings you the tools, resources, and energy you need to make your dreams come true. The key is to bring these tools together so that the impact of what you create is greater than the separate parts. An opportunity is right on the horizon. You are ready, despite what you may believe.",
			class: "the-magician"
		},
		{
			name: "The High Priestess",
			past: "The High Priestess is the guardian of the subconscious mind and the teacher of sacred knowledge and hidden mysteries. Sitting at the threshold of the conscious and subconscious, she has an innate ability to travel between these realms effortlessly. In your Past, this card signifies a shift in the relationship between your two minds.",
			present: "The High Priestess is the guardian of the subconscious mind and the teacher of sacred knowledge and hidden mysteries. Sitting at the threshold of the conscious and subconscious, she has an innate ability to travel between these realms effortlessly. In your Present, it speaks to a calm between the two halves of yourself. Aim to keep that balance.",
			future: "The High Priestess is the guardian of the subconscious mind and the teacher of sacred knowledge and hidden mysteries. Sitting at the threshold of the conscious and subconscious, she has an innate ability to travel between these realms effortlessly. In the Future position, look to find balance that you may be lacking now.",
			class: "the-high-priestess"
		},
		{
			name: "The Empress",
			past: "The Empress signifies abundance. She has everything she needs and so do you. In the Past position, The Empress calls on you to reflect on what you once had. Life's pleasures can be fleeting but proceed with gratitude.",
			present: "The Empress signifies abundance. She has everything she needs and so do you. Take time to reflect on what you have. Channel your energy into gratitude.",
			future: "The Empress signifies abundance. She has everything she needs and so do you. In the Future position, this card welcomes you to reflect on what you have and what you can let go. What is worth carrying?",
			class: "the-empress"
		},
		{
			name: "The Emperor",
			past: "With power and authority, the Emperor suggests that you are adopting a protector role. At times, strict and bound by rules, this card indicates calm and order. In the Past position, you are breaking free of rules that held you down.",
			present: "With power and authority, the Emperor suggests that you are adopting a protector role. At times, strict and bound by rules, this card indicates calm and order. In the present, what are you doing to channel your inner Emperor. Take pride in your world and rule it well.",
			future: "With power and authority, the Emperor suggests that you are adopting a protector role. At times, strict and bound by rules, this card indicates calm and order. By appearing in the Future position, this card indicates you are lacking these Emperor qualities. Aspire to rule your world well.",
			class: "the-emperor"
		},
		{
			name: "The Hierophant",
			past: "The Hierophant card represents an established set of spiritual values and beliefs and is often correlated with religion and other formal doctrines. Before you can discover your own belief systems and make your own choices, the Hierophant encourages you to learn the fundamental principles from a trusted source. Do you need to reevaluate beliefs from your past?",
			present: "The Hierophant card represents an established set of spiritual values and beliefs and is often correlated with religion and other formal doctrines. Before you can discover your own belief systems and make your own choices, the Hierophant encourages you to learn the fundamental principles from a trusted source. In the Present position, this card welcomes you to look inward and ensure your beliefs serve you well.",
			future: "The Hierophant card represents an established set of spiritual values and beliefs and is often correlated with religion and other formal doctrines. Before you can discover your own belief systems and make your own choices, the Hierophant encourages you to learn the fundamental principles from a trusted source. In the Future position, this card invites you to seek out spiritual guidance.",
			class: "the-hierophant"
		},
		{
			name: "The Lovers",
			past: "In its purest form, the Lovers card represents conscious connections and meaningful relationships. The arrival of this card in the Past position, shows that a relationship from your past requires attention in order to let it go.",
			present: "In its purest form, the Lovers card represents conscious connections and meaningful relationships. The arrival of this card in a Tarot reading shows that you have a beautiful, soul-honouring connection with a loved one. Ensure you cherish it.",
			future: "In its purest form, the Lovers card represents conscious connections and meaningful relationships. While it can be interpreted as solely romantic, this card in the Future position can indicate a significant shift in any relationship.",
			class: "the-lovers"
		},
		{
			name: "The Chariot",
			past: "The Chariot is a card of willpower, determination, and strength. You have set your objectives and are now channelling your inner power with a fierce dedication to bring them to fruition. Take a look at past victories. How have you grown?",
			present: "The Chariot is a card of willpower, determination, and strength. You have set your objectives and are now channelling your inner power with a fierce dedication to bring them to fruition. This is a powerful card in the Present position. Use this knowledge to move forward with purpose.",
			future: "The Chariot is a card of willpower, determination, and strength. You have set your objectives and are now channelling your inner power with a fierce dedication to bring them to fruition.",
			class: "the-chariot"
		},
		{
			name: "Strength",
			past: "The Strength card represents the inner strength and the human spirit's ability to overcome any obstacle. Strength is about knowing you can endure life’s ups and downs. You have great stamina and persistence, balanced with underlying patience and inner calm. Have you been depleted of strength in the past? What can you be doing now to change that.",
			present: "The Strength card represents the inner strength and the human spirit's ability to overcome any obstacle. Strength is about knowing you can endure life’s ups and downs. You have great stamina and persistence, balanced with underlying patience and inner calm. Your strength gives you the confidence to overcome any growing fears, challenges or doubts. Feel the fear and do it anyway!",
			future: "The Strength card represents the inner strength and the human spirit's ability to overcome any obstacle. Strength is about knowing you can endure life’s ups and downs. You have great stamina and persistence, balanced with underlying patience and inner calm. What strength will you need for tomorrow? Starting stockpiling it now.",
			class: "strength"
		},
		{
			name: "The Hermit",
			past: "The Hermit shows that you are taking a break from everyday life to draw your energy and attention inward and find the answers you seek, deep within your soul. You realise that your most profound sense of truth and knowledge is within yourself and not in the distractions of the outside world. In the Past, you may have not allowed time for this introspection. Make time now.",
			present: "The Hermit shows that you are taking a break from everyday life to draw your energy and attention inward and find the answers you seek, deep within your soul. You realise that your most profound sense of truth and knowledge is within yourself and not in the distractions of the outside world. In the Present, take the time now to carve out a space for yourself.",
			future: "The Hermit shows that you are taking a break from everyday life to draw your energy and attention inward and find the answers you seek, deep within your soul. You realise that your most profound sense of truth and knowledge is within yourself and not in the distractions of the outside world. The Future lies ahead. Look inward to find it.",
			class: "the-hermit"
		},
		{
			name: "Wheel of Fortune",
			past: "The Wheel of Fortune reminds you that the wheel is always turning and life is in a state of constant change. If you’re going through a difficult time rest assured that it will get better from here. Good luck and good fortune will make their return in time.",
			present: "The Wheel of Fortune reminds you that the wheel is always turning and life is in a state of constant change. If you’re going through a difficult time rest assured that it will get better from here. Good luck and good fortune will make their return in time.",
			future: "The Wheel of Fortune reminds you that the wheel is always turning and life is in a state of constant change. If you’re going through a difficult time rest assured that it will get better from here. Good luck and good fortune will make their return in time.",
			class: "wheel-of-fortune"
		},
		{
			name: "Justice",
			past: "The Justice card represents justice, fairness, truth and the law. You are being called to account for your actions and will be judged accordingly. Your past decisions are still with you.",
			present: "The Justice card represents justice, fairness, truth and the law. You are being called to account for your actions and will be judged accordingly. This card in the Present affords you to be mindful of your impact.",
			future: "The Justice card represents justice, fairness, truth and the law. You are being called to account for your actions and will be judged accordingly. This cards calls you to remember that not only for yourself, but for those in your life.",
			class: "justice"
		},
		{
			name: "The Hanged Man",
			past: "The Hanged Man reminds you that sometimes you have to put everything on hold before you can take the next step, or the Universe will do it on your behalf. And maybe not in the time or way you had imagined. This card calls you to let go of the habits that no longer serve you.",
			present: "The Hanged Man reminds you that sometimes you have to put everything on hold before you can take the next step, or the Universe will do it on your behalf. And maybe not in the time or way you had imagined. In the Present, this card calls you to embrace exactly where you are, even if you feel stuck.",
			future: "The Hanged Man reminds you that sometimes you have to put everything on hold before you can take the next step, or the Universe will do it on your behalf. And maybe not in the time or way you had imagined. Getting stuck gives you time to reflect. Embrace the pause.",
			class: "the-hanged-man"
		},
		{
			name: "Death",
			past: "The Death card symbolises the end of a major phase or aspect of your life that you realise is no longer serving you, opening up the possibility of something far more valuable and essential. You must close one door to open another. In the Past position, this card indicates a need to let go of what is holding you back.",
			present: "The Death card symbolises the end of a major phase or aspect of your life that you realise is no longer serving you, opening up the possibility of something far more valuable and essential. You must close one door to open another. In the Present position, this card indicates the end of a chapter. Where are you headed next?",
			future: "The Death card symbolises the end of a major phase or aspect of your life that you realise is no longer serving you, opening up the possibility of something far more valuable and essential. You must close one door to open another. In the Future position, this card indicates you are nearing the end of one phase. Look to wrap up your loose ends and move forward with a clean slate.",
			class: "death"		
		},
		{
			name: "Temperance",
			past: "Temperance is the card for bringing balance, patience, and moderation into your life. You are being invited to stabilise your energy and to allow the life force to flow through you without force or resistance. Something from your past is monopolizing your energy.",
			present: "Temperance is the card for bringing balance, patience and moderation into your life. You are being invited to stabilise your energy and to allow the life force to flow through you without force or resistance. It’s time to recover your flow and get your life back into order and balance.",
			future: "Temperance is the card for bringing balance, patience and moderation into your life. You are being invited to stabilise your energy and to allow the life force to flow through you without force or resistance. It’s time to recover your flow and get your life back into order and balance.",
			class: "temperance"
		},
		{
			name: "The Devil",
			past: "The Devil card represents your dark side and the negative forces that constrain you. What from your past is holding you back from being the best version of yourself.",
			present: "The Devil card represents your dark side and the negative forces that constrain you. This card speaks of choice, and consciously choosing which side to inhabit. Beware of selling your soul for short term gratification.",
			future: "The Devil card represents your dark side and the negative forces that constrain you. This card speaks of choice, and consciously choosing which side to inhabit. Beware of trading your present without the promise of a future.",
			class: "the-devil"
		},
		{
			name: "The Tower",
			past: "The Tower Card invites you to expect the unexpected. There’s no escaping it. Change is here to tear things up, create chaos and destroy everything in its path. In the Past position, this card shows that you've weathered the storm. Look for the sunshine.",
			present: "The Tower Card invites you to expect the unexpected. There’s no escaping it. Change is here to tear things up, create chaos and destroy everything in its path, but it's in your best interest.",
			future: "The Tower Card invites you to expect the unexpected. There’s no escaping it. Change is here to tear things up, create chaos and destroy everything in its path, but it's in your best interest. Be ready for anything.",
			class: "the-tower"
		},
		{
			name: "The Star",
			past: "The Star brings a welcome reprieve after a period of destruction and turmoil. You have endured many challenges and stripped yourself bare of any limiting beliefs that have previously held you back. You are realising your core essence, who you are beneath all the layers.",
			present: "The Star brings a welcome reprieve after a period of destruction and turmoil. You have endured many challenges and stripped yourself bare of any limiting beliefs that have previously held you back. You are realising your core essence, who you are beneath all the layers.",
			future: "The Star brings a welcome reprieve after a period of destruction and turmoil. You have endured many challenges and stripped yourself bare of any limiting beliefs that have previously held you back. You are realising your core essence, who you are beneath all the layers.",
			class: "the-star"
		},
		{
			name: "The Moon",
			past: "The Moon often centers on fear and insecurity. The Moon can indicate a time of uncertainty and illusion, when nothing is what it seems. Be careful of making fast decisions when the Moon appears because you may later realise you only had half the information you needed. Is fear from your past holding you back?",
			present: "The Moon often centers on fear and insecurity. The Moon can indicate a time of uncertainty and illusion, when nothing is what it seems. Be careful of making fast decisions when the Moon appears because you may later realise you only had half the information you needed. You need to listen to and trust your intuition so you can see beyond what is in front of you.",
			future: "The Moon often centers on fear and insecurity. The Moon can indicate a time of uncertainty and illusion, when nothing is what it seems. Be careful of making fast decisions when the Moon appears because you may later realise you only had half the information you needed. You need to listen to and trust your intuition so you can see beyond what is in front of you.",
			class: "the-moon"
		},
		{
			name: "The Sun",
			past: "The Sun represents success, radiance and abundance. The Sun gives you strength and tells you that no matter where you go or what you do, your positive and radiant energy will follow you and bring you happiness and joy. What radiates from your past and keeps your heart full?",
			present: "The Sun represents success, radiance and abundance. The Sun gives you strength and tells you that no matter where you go or what you do, your positive and radiant energy will follow you and bring you happiness and joy.",
			future: "The Sun represents success, radiance and abundance. The Sun gives you strength and tells you that no matter where you go or what you do, your positive and radiant energy will follow you and bring you happiness and joy. What can you build now to ensure your future is full of sunshine?",
			class: "the-sun"
		},
		{
			name: "Judgement",
			past: "The Judgement card is calling you to rise up and embrace a higher level of consciousness. You are experiencing a spiritual awakening and realising that you are destined for so much more. This is your cosmic up-levelling! You hear the call and are ready to act.",
			present: "The Judgement card is calling you to rise up and embrace a higher level of consciousness. You are experiencing a spiritual awakening and realising that you are destined for so much more. This is your cosmic up-levelling! You hear the call and are ready to act.",
			future: "The Judgement card is calling you to rise up and embrace a higher level of consciousness. You are experiencing a spiritual awakening and realising that you are destined for so much more. This is your cosmic up-levelling! You hear the call and are ready to act.",
			class: "judgement"
		},
		{
			name: "The World",
			past: "The World card indicates a sense of wholeness, achievement, fulfilment and completion. With that in the Past position, what metaphorical mountain do you intend to climb next?",
			present: "The World card indicates a sense of wholeness, achievement, fulfilment and completion. Everything has come together, and you are in the right place, doing the right thing, achieving what you have envisioned. You feel whole and complete.",
			future: "The World card indicates a sense of wholeness, achievement, fulfilment and completion. Everything is coming together. Stay the course to reap the rewards.",
			class: "the-world"
		}
	]

// <---- FUNCTION ----> //

	// past card object
	const pastCard = (array) => {
		const randomCard = Math.floor(Math.random()
		* array.length);
		return tarotCards[randomCard]; //returns the object
	}	

	// present card object
	const presentCard = (array) => {
		const randomCard = Math.floor(Math.random()
		* array.length);
		return tarotCards[randomCard]; //returns the object
	}

	// future card object
	const futureCard = (array) => {
		const randomCard = Math.floor(Math.random()
		* array.length);
		return tarotCards[randomCard]; //returns the object
	}

	// past card class for the card image
	const getPastClass = (object) => {
		const pastCardClass = object.class;
		return pastCardClass;
	}

	// past card class for the 
	const getPastDesc = (object) => {
		const pastCardDesc = object.past;
		return pastCardDesc;
	}

	// generates future card class for the card image
	const getPresentClass = (object) => {
		const presentCardClass = object.class;
		return presentCardClass;
	}

	const getPresentDesc = (object) => {
		const presentCardDesc = object.present;
		return presentCardDesc;
	}

	const getFutureClass = (object) => {
		const futureCardClass = object.class;
		return futureCardClass;
	}

	const getFutureDesc = (object) => {
		const futureCardDesc = object.future;
		return futureCardDesc;
	}

	//adds text below images based on cards pulled
	const $pastCardText = (pastDescription) => {
		$(".past-card-description div").append(`
			<p class="past-card-description">
				${pastDescription}
			</p>
		`);
	};

	const $presentCardText = (presentDescription) => {
		$(".present-card-description div").append(`
			<p class="present-card-description">
				${presentDescription}
			</p>
		`);
	};

	const $futureCardText = (futureDescription) => {
		$(".future-card-description div").append(`
			<p class="future-card-description">
				${futureDescription}
			</p>
		`);
	};

	//click listener for main button
	$("div.button").on("click", function(){ 
		const userPastCard = pastCard(tarotCards);
		let userPresentCard = presentCard(tarotCards);
		let userFutureCard = futureCard(tarotCards);

		if (userPastCard === userPresentCard) {
			let userPresentCard = presentCard(tarotCards);
		}

		if (userPresentCard === userFutureCard) {
			let userFutureCard = futureCard(tarotCards);
		}

		const userPastClass = getPastClass(userPastCard);
		const userPresentClass = getPresentClass(userPresentCard);
		const userFutureClass = getFutureClass(userFutureCard);

		// permanent card flip and text fade in
		$(".card-past").one("click", function(){
			$pastCardText(getPastDesc(userPastCard));
			$(".card-past-back").addClass("perm-hover");
			$(".past-card-instructions").fadeOut(500, function() {
			});
			$(".past-card-description div").delay(500).fadeIn(1000, function() {
			});
		})

		// permanent card flip and text fade in
		$(".card-present").one("click", function(){
			$presentCardText(getPresentDesc(userPresentCard));
			$(".card-present-back").addClass("perm-hover");
			$(".present-card-instructions").fadeOut(500, function() {
			});
			$(".present-card-description div").delay(500).fadeIn(1000, function() {
			});
		})

		// permanent card flip and text fade in
		$(".card-future").one("click", function(){
			$futureCardText(getFutureDesc(userFutureCard));
			$(".card-future-back").addClass("perm-hover");
			$(".future-card-instructions").fadeOut(500, function() {
			});
			$(".future-card-description div").delay(500).fadeIn(1000, function() {
			});
		})

		// adds class to card backs for images
		$(".card-past-back").addClass(`${userPastClass}`);
		$(".card-present-back").addClass(`${userPresentClass}`);
		$(".card-future-back").addClass(`${userFutureClass}`);

	}) // ends click listener for main button
	
	// fades out welcome, fades in card layout
	$(".button").on("click", function() {
		$(".welcome").fadeOut(1000, function() {
		});

		$(".three-card-spread, footer").delay(1000).fadeIn(3000, function() {
		});
	});

}) // ENDS DOCUMENT READY



