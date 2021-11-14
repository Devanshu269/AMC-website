// window.onload = function(){}
var firebaseConfig = {
    apiKey: "AIzaSyAdWq4-ZE4Yv87w_AEyy5b5JwkW9A8iL3U",
    authDomain: "contact-form-38b0b.firebaseapp.com",
    databaseURL: "https://contact-form-38b0b-default-rtdb.firebaseio.com",
    projectId: "contact-form-38b0b",
    storageBucket: "contact-form-38b0b.appspot.com",
    messagingSenderId: "748179068137",
    appId: "1:748179068137:web:2a3ad3ed4d8a07ac990c78",
    measurementId: "G-HC8E0ED0TD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
$(document).ready(function() {
    var dataSet
    var USN
    var Admission_category
    var CASTE
    var CET_rank
    var COMEDK_rank
    var Student_Section
    var Program
    var sem
    var table = $('#user_data').DataTable({
        data: dataSet,
        columns: [
            { data: USN, title: 'USN' },
            { data: Program, title: 'Branch' },
            { data: Student_Section, title: 'Section'},
            { data: sem, title: 'SEM' },
            { data: Admission_category, title: 'Admission Category' },
            { data: CASTE, title: 'CASTE' },
            { data: CET_rank, title: 'CET Rank' },
            { data: COMEDK_rank, title: 'COMEDK Rank' },
        ],
        dom: 'Bfrtip',
        orderCellsTop: true,
        fixedHeader: true,
        targets: -1,
        className: 'dt-body-right',
        responsive: true,
        hover: 1,
        // select: {
        //     style: 'os',
        //     selector: 'td:first-child'
        // },
        buttons: [

            'excel', 'pdf', 'print'
        ]

    });
    firebase.database().ref('Student Data').on('child_added', function(snapshot) {
        dataSet = [USN = snapshot.val().USN, Program = snapshot.val().Program, Student_Section = snapshot.val().Student_Section, sem = snapshot.val().SEM, Admission_category = snapshot.val().Admission_category, CASTE = snapshot.val().CASTE, CET_rank = snapshot.val().CET_rank, COMEDK_rank = snapshot.val().COMEDK_rank];
        table.rows.add([dataSet]).draw();
    });
    // $('#CETrank').on('change', function() {
    //     if ($(this).is(':checked')) {
    //         $.fn.dataTable.ext.search.push(
    //             function(settings, dataSet, dataIndex) {
    //                 return dataSet[3] < 5000
    //             }
    //         )
    //     } else {
    //         $.fn.dataTable.ext.search.pop()
    //     }
    //     table.draw()
    // })
    // $('#COMEDKrank').on('change', function() {
    //     if ($(this).is(':checked')) {
    //         $.fn.dataTable.ext.search.push(
    //             function(settings, dataSet, dataIndex) {
    //                if (dataset[4] == 'mang') {
    //                 return dataSet[4]
    //                }
    //              }
    //         )
    //     } else {
    //         $.fn.dataTable.ext.search.pop()
    //     }
    //     table.draw()
    // })
    $('#COMEDKrank').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[4] == 'mang') {
                        return dataSet[4]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })
    $('#COMEDK').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[4] == 'comedk') {
                        return dataSet[4]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })
    $('#CET').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[4] == 'cet') {
                        return dataSet[4]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })
    $('#cse').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[1] == "CSE") {
                        return dataSet[1]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })

    $('#ece').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[1] == "ECE") {
                        return dataSet[1]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })

    $('#civil').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[1] == "CIVIL") {
                        return dataSet[1]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })

    $('#mech').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[1] == "MECH") {
                        return dataSet[1]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })
    $('#sem1').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[3] == 1) {
                        return dataSet[3]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })
    $('#sem2').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[3] == 2) {
                        return dataSet[3]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })

    $('#sem3').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[3] == 3) {
                        return dataSet[3]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })
    $('#sem4').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[3] == 4) {
                        return dataSet[3]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })
    $('#sem5').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[3] == 5) {
                        return dataSet[3]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })
    $('#sem6').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[3] == 6) {
                        return dataSet[3]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })
    $('#sem7').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[3] == 7) {
                        return dataSet[3]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })
    $('#sem8').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[3] == 8) {
                        return dataSet[3]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })

    $('#secA').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[2] == "A") {
                        return dataSet[2]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })

    $('#secB').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[2] == "B") {
                        return dataSet[2]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })

    $('#secC').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[2] == "C") {
                        return dataSet[2]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })

    $('#secD').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[2] == "D") {
                        return dataSet[2]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })

});




