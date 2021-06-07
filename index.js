const element_id = document.getElementById("right_div")

function perDetails(){
    element_id.innerHTML = `
        <h1 id="P_details">Personal Details</h1>
        <div class="table_content">
            <table>
                <tr>
                    <th>Name</th>
                    <td>Ashish Chauhan</td>
                </td>
                <tr>
                    <th>Father name</th>
                     <td>Mr. Vinod Kumar Chauhan</td>
                    <td rowspan="4">
                        <div id="my_image">
                            <img src="IMG_20200817_184342_341.jpg" alt="myimage">
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>Date of birth</th>
                    <td>04-Sep-1999</td>
                <tr>
                    <th>Gender</th>
                    <td>Male</td>
                <tr>
                    <th>Nationality</th>
                    <td>Indian</td>
                </tr>
                <tr>
                    <th>Language known</th>
                    <td> Hindi, English</td>
                <tr>
                </tr>
                    <th rowspan="3">Address</th>
                    <td>
                        <ul style="list-style: none">
                            <li> Village: Mamepur </li>
                            <li> Post: Rajpura </li>
                            <li> City: Meerut </li>
                            <li> PIN CODE : 250001 </li>
                    </td>
                </tr>
                <tr>
                    <td>State : Uttar Pradesh</td>
                </tr>
                <tr>
                    <td>Country : INDIA</td>
                </tr>
            </table>
        </div>        
    `;
}

function address(){
    element_id.innerHTML = `
        <h1 id="add_head">Address </h1>
        <div class="table_content">
            <table>
                <tr>
                    <th> Village</th>
                    <td> Mamepur</td>
                </tr>
                <tr>
                    <th>Post Office</th>
                    <td>Rajpura</td>
                </tr>
                <tr>
                    <th>City</th>
                    <td>Meerut</td>
                </tr>
                <tr>
                    <th>PIN Code</th>
                    <td>250001</td>
                </tr>                
                <tr>
                    <th>State</th>
                    <td>Uttar Pradesh</td>
                </tr>

                <tr>
                    <th>Country</th>
                    <td>India</td>
                </tr>
            </table>        
        </div>
    `;
}
function educationDetails(){
    element_id.innerHTML = `
        <h1 id="edu_head">Education Details</h1>
        <div class="table_content">
            <table>
                <tr>
                    <th>Class</th>
                    <th>School/College</th>
                    <th>Board</th>
                    <th>Passing Year</th>
                    <th>Percentage</th>
                </tr>
                <tr>
                    <td>10¬th</td>
                    <td>S.D. inter college</td>
                    <td>UP board</td>
                    <td>2014 - 15</td>
                    <td>82.33%</td>
                </tr>
                <tr>
                    <td>12¬th</td>
                    <td>S.D. inter college</td>
                    <td>UP board</td>
                    <td>2016 - 17</td>
                    <td>76%</td>
                </tr>
            </table>
        </div>
        <div class="table_content">
            <table>
                <tr>
                    <th>Course</th>
                    <th>College</th>
                    <th>University</th>
                    <th>Session</th>
                    <th>Percentage</th>
                </tr>
                <tr>
                    <td>B.tech</td>
                    <td>IIMT Engineering college</td>
                    <td>Dr. APJ Abdul kalam university</td>
                    <td>2018 - 22</td>
                    <td>&nbsp;</td>
                </tr>
            </table>
        </div>
    `;
}
function skills(){
    element_id.innerHTML = `
        <h1 id="Skill_head">Skills</h1>
        <div id="list_content">
            <ol>
                <li>C & C++ (Intermediate)</li>
                <li>Python (Intermediate)</li>
                <li>HTML(Intermediate)</li>
                <li>CSS(Intermediate)</li>
                <li>JavaScript (Intermediate)</li>
                <li>jQuery (Beginner)</li>
                <li>Django (Beginner)</li>
                <li>ReactJS (Beginner)</li>
                <li>Machine learning (Beginner)</li>
                <li>Data Visualization (Intermediate)</li>
            </ol>
        </div>
   `;
}

function contactDetails(){
    element_id.innerHTML = `
       <h1 id="contact_head">Contact Details</h1>
        <div class="table_content">
            <table>
                <tr>
                    <th>Phone no.</th>
                    <td>9870698212</td>
                </tr>
                <tr>
                    <th rowspan="2" >Email ID</th>
                    <td>ashishchauhan4999@gmail.com</td>
                </tr>
                <tr>
                    <td>ac344530@gmail.com</td>
                </tr>
            </table>
        </div>
    `;
}
