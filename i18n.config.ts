export default defineI18nConfig(() => ({
	legacy: false,
	messages: {
		en: {
			// Navbar
			"navbar.aboutUs": "About us",
			"navbar.status": "Status",
			"navbar.donate": "Donate",
			"navbar.contact": "Contact",
			"navbar.explore": "Explore",

			"navbar.aboutUs.team": "Team",
			"navbar.aboutUs.history": "History",
			"navbar.aboutUs.moreAccounts": "More Accounts",

			// Main landing page
			tagline: "Social networking that's not for sale",
			taglineSubText:
				"Mastodon.de is a truly open social network. No ads, no tracking, no data mining, no algorithms! The network is run by the community for the community.",
			signUpButton: "Sign up",
			learnMoreButton: "Learn more",

			// Embeds grid
			embedsGridTitle: "Community Spaces",
			embedsGridSubText1:
				"Unlike all other social networks, we have no shareholders and don't care about profit!",
			embedsGridSubText2:
				"Since there is no algorithm that decides what posts are shown in your feed, you can just relax and post for fun!",

			// Team presentation
			teamTitle: "Meet our team",
			teamSubText:
				"We are a dynamic group of individuals who are passionate about what we do and dedicated to proving a great experience to our community.",

			// Team members
			teamMemberErikPosition: "CEO, Uden AI",
			teamMemberErikDescription:
				"Erik Uden is the leader of mastodon.de and CEO of Uden AI. He started working on mastodon.de in November 2022, and made it what it is now.",

			// Features section
			featuresTitle: "Federated, open network",
			featuresSubText:
				"Mastodon.de is connected to a gigantic federated network of millions of users, the Fediverse.\nIt's like email, where everybody has an address in the format name{'@'}site.com !",

			feature1Title: "Powerful moderation tools",
			feature1SubText:
				"Block any keyword from appearing in your timelines with filters",

			feature2Title: "Make your own feeds",
			feature2SubText:
				"You alone should decide what should show up in your feeds. Mastodon.de lets you curate your own feeds without a predetermined algorithm",

			feature3Title: "Account portability",
			feature3SubText:
				"If you want to change Fediverse servers, you can easily switch and keep all your followers from mastodon.de!",

			WhatisMastodonHeading: "What is Mastodon?",
			WhatisMastodonExplaination: "Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas.",
			WhatisMastodonExplaination2: "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.",
			WhatisMastodonExplaination3: "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.",
			WhatisMastodonExplaination4: "Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.",
			WhatisMastodonHeading2: "Thingy? Thingy.",

			donate1: "Like our service?",
			donate2: "Any dollar helps!",
			faqheading: "Frequently asked questions",
		},
		de: {
			// Navigationsleiste
			"navbar.aboutUs": "Über uns",
			"navbar.status": "Status",
			"navbar.donate": "Spenden",
			"navbar.contact": "Kontakt",
			"navbar.explore": "Entdecken",

			"navbar.aboutUs.team": "Team",
			"navbar.aboutUs.history": "Geschichte",
			"navbar.aboutUs.moreAccounts": "Mehr Accounts",

			// Haupt-Landingpage
			tagline: "Soziales Netzwerk, für das Gemeinwohl",
			taglineSubText:
				"Mastodon.de ist ein wahrlich offenes und soziales Netzwerk. Ohne Anzeigen, Tracking oder Algorithmen, die dir den Schlaf rauben. Von der Gemeinschaft für die Gemeinschaft bereitgestellt.",
			signUpButton: "Registrieren",
			learnMoreButton: "Erfahre mehr",

			// Einbetten-Raster
			embedsGridTitle: "Raum für Gemeinschaft",
			embedsGridSubText1:
				"Das Ziel von Mastodon.de ist eine starke Gemeinschaft, unabhängig von Likes, Follower und Boosts - Du der Nutzer bist das was zählt! Also ein perfekter Ort für Communitys im Netz.",
			embedsGridSubText2:
				"Ohne Algorithmus, der über gezeigte Inhalte entscheidet, kannst du dich mit Leichtigkeit in Diskussionen engagieren, neue Dinge entdecken oder Dinge aus deinem Leben teilen. Dein Account ist individuell, wie du selbst.",

			// Team-Präsentation
			teamTitle: "Lerne unser Team kennen",
			teamSubText:
				"Wir sind eine dynamische Gruppe von Individuen, die leidenschaftlich bei dem sind, was wir tun, und die sich dafür einsetzen, unserer Gemeinschaft eine großartige Erfahrung zu bieten.",

			// Teammitglieder
			teamMemberErikPosition: "CEO, Uden AI",
			teamMemberErikDescription:
				"Erik Uden ist der Leiter von mastodon.de und CEO von Uden AI. Er hat im November 2022 mit der Arbeit an mastodon.de begonnen und es zu dem gemacht, was es heute ist.",

			// Funktionsbereich
			featuresTitle: "Föderiertes, offenes Netzwerk",
			featuresSubText:
				"Mastodon.de ist Teil eines riesigen Netzwerkes namens Fediverse. Tausende Instanzen sprechen ein gemeinsames Protokoll, um eines der größten unabhängigen Netzwerke zu schaffen. Nutzernamen bestehen hierbei, wie bei einer Mailadresse, aus Nutzernamen und Serveradresse (username@example.com).",

			feature1Title: "Leistungsstarke Moderationstools",
			feature1SubText:
				"Mithilfe von Filtern können unerwünschte Schlüsselwörter, Nutzer und Instanzen aus dem eigenen Feed blockiert werden.",

			feature2Title: "Individuelle Feeds",
			feature2SubText:
				"Mastodon basiert auf chronologischen Feeds: Beiträge von Accounts denen du folgst werden dir chronologisch, ungefiltert und werbefrei angezeigt. Für bessere Organisation kannst du Listen mit deinen liebsten Accounts führen.",

			feature3Title: "Kontoübertragbarkeit",
			feature3SubText:
				"Nutzerkonten im Fediverse sind nicht auf einen bestimmten Server gebunden - Dir gefällt die Instanz, die deinen Account beheimatet nicht? Kein Problem, suche dir einen anderen Server und behalte dabei deine Follower.",

			WhatisMastodonHeading: "Was ist eigentlich Mastodon?",
			WhatisMastodonExplaination: "Mastodon ist ein dezentrales soziales Netzwerk, welches Nutzerrechte in den Vordergrund stellen möchte. ",
			WhatisMastodonExplaination2: "Der Quellcode von Mastodon ist offen und jeder kann aufgrund dieser Tatsache seine eigene Instanz erstellen. Diese Instanzen stehen miteinander in Verbindung, weshalb sich Nutzer instanzübergreifend folgen, austauschen und in Kontakt stehen können.",
			WhatisMastodonExplaination3: "Mastodon verwendet dafür ein spezielles föderiertes Protokoll, welches ein einheitliches Format für den Austausch von Posts, Videos und anderen Daten darstellt. Somit kann man nicht nur mit Nutzern auf Mastodon, sondern auch von jedem anderen Dienst, der dieses Protokoll nutzt interagieren.",
			WhatisMastodonExplaination4: "Wie in einem Universum mit tausenden Planeten existieren im sogenannten Fediverse (der Name dieses Konstrukts) also auch Tausende Instanzen mit insgesamt Millionen von Nutzern aus unterschiedlichen Interessensgebieten und Regionen der Welt. Jeder findet irgendwo im Fediverse Platz! Worauf wartest du? Trete dem sozialsten sozialen Netzwerk bei, welches nur für das öffentliche Wohl existiert.",
			WhatisMastodonHeading2: "Die Magie des Fediverse",

			donate1: "Du hast Mastodon.de für dich gefunden?",
			donate2: "Jeder Cent hilft uns beim Betrieb",
		},
	},
}));
