To create a new scenario:
-------------------------

Choose your images:

    Two split vote candidates and one contrasting candidate
    Three versions of each:
        prefix-image.jpg	= 300x400 px
        prefix-selected.jpg	= 300x400 px with 'checkmark-small.png' added to the lower right corner
        prefix-small.jpg	=  75x100 px

In 'index.html':

    Line  14    - Update title
    Lines 18-22 - Update (or delete) Facebook meta data
    Lines 30-42 - Update (or delete) Google tracking script
    Lines 50-51 - Update header text

In 'approval.html':

    Line  14    - Update title
    Lines 18-22 - Update (or delete) Facebook meta data
    Lines 30-42 - Update (or delete) Google tracking script
    Lines 50-52 - Update header text

In 'script.js':

    Lines 55-58 - Modify:
        candidateName1	<--First split vote candidate
        candidateName2	<--Second split vote candidate
        candidateName3	<--Contrasting candidate
        descriptor	<--"You think [candidateNameX] is the [descriptor]"
        
In 'style.css':

    Lines 146-168 - Update image URLs
    Lines 272-282 - Update image URLs
    
In 'plurality-script.js' AND 'approval-script.js':

    Update all header text
    
Finally, create a new PNG and overwrite 'screen.png' (for social media) - a 500x500 square works nicely