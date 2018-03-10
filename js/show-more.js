var STATE = "less";

function toggleText(id)
{
	switch(id) {
		case "_1":
		var text = `<ul> 
	<li><strong>Mostly idgaf but sometimes these annoy me:</strong>
<ul>
	<li>Narcissism</li>
	<li>Too much noise</li>
	<li>Litter</li>
	<li>Reveal private information about people without their consent</li>
	<li>Get into relationships only for sexual gratification and/or for money</li>
	<li>Excessive cursing</li>
</ul>
</li>
	<li><strong>The modern education system</strong>
<ul>
	<li>Forced schooling</li>
	<li>The grading system</li>
	<li>Standardized tests</li>
	<li><button id="toggleButton_2" class="textArea" onclick="toggleText('_2');">Lack of actually necessary classes regarding</button>
	<div id="textArea_2"></div>
</li>
	<li>Inflexible hours and schedule</li>
	<li>The incredible lack of recess time <em>( Teens and adults need breaks too )</em></li>
	<li>Needing permission to leave <em>( really? )</em></li>
</ul>
</li>
	<li><strong>Helicopter parents</strong></li>
	<li><strong>Needy people</strong></li>
	<li><strong>Sheeple</strong></li>
	<li><strong>Websites that overuse gifs</strong> ( *cough* Buzzfeed )</li>
	<li><strong>Inconsistent Schedule</strong></li>
	<li><strong>Living with people </strong>( People I can trust are welcome )</li>
	<li><strong>Talking on the phone</strong> ( Unless I know you well )</li>
	<li><strong>Hot humid weather</strong></li>
	<li><strong>Complete silence</strong> ( need my bg noise D: )</li>
	<li><strong>Being active every day</strong></li>
	<li><strong>Hiking for a long period of time</strong></li>
	<li><strong>Getting up early</strong></li>
	<li><strong>Being 100% organized</strong></li>
	<li><strong>Dust</strong></li>
	<li><strong>FPS Games</strong> ( TF2 and Overwatch are some exceptions )</li>
	<li><strong>Too much attention</strong> ( I'm the opposite of an attention whore lol )</li>
</ul>`;
			break;
			
		case "_2":
		var text = `<ul>
	<li>Parenting</li>
	<li>Relationships</li>
	<li>Survival</li>
	<li>Cooking</li>
	<li>Manners</li>
	<li>Social Skills ( People without social disorders still need this believe it or not xD )</li>
	<li>Driver's Ed <em>( They took it out of my High School :/ )</em></li>
	<li>Having a house</li>
	<li>Programming</li>
	<li>Game Development <em>( not necessary, but has a growing market, would make it an elective. )</em></li>
</ul>`;
			break;
			
		case "_3":
		//do something
			break;
			
		case "_4":
		//do something
			break;
			
		default:
		//do something
	}
	
	if (STATE == "less") {
		document.getElementById("textArea"+id).innerHTML = text;
		document.getElementById("toggleButton"+id).innerText = "Show Less";
		STATE = "more";
	} else if (STATE == "more") {
		document.getElementById("textArea"+id).innerHTML = "";
		document.getElementById("toggleButton"+id).innerText = "Show More";
		STATE = "less";
	}
}
	