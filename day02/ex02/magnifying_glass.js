// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   magnifying_glass.js                                :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: sko <marvin@42.fr>                         +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/05 21:35:24 by sko               #+#    #+#             //
//   Updated: 2019/12/05 21:35:34 by sko              ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

// file read : https://nodejs.org/api/fs.html
// Titles of Links and text between <a> tags should be changed to Uppercase.
if (process.argv[2]) {
    var fs = require('fs');
    fs.readFile(process.argv[2],'utf8', function (err, data) {

        var str_match;
        var ankor_match;

        var replace;
        var str_match_replace;
        var ankor_match_replace;

        if (err) {
            console.log(err);
            return ;
        }
        var a_tag_reg = new RegExp('<a.*>.*<\/a>', 'g');
        var title_reg = new RegExp('[^title="]*".*', 'g');
        var aa_tag_reg = new RegExp('>[^><]+<', 'g');
        ankor_match = data.match(a_tag_reg);
        if (ankor_match != null)
        {
            for (var i = 0; i < ankor_match.length; ++i) {
                ankor_match_replace = ankor_match[i];
                // replace word between <a>*</a>
                str_match = ankor_match_replace.match(aa_tag_reg);
                if (str_match) {
                    replace = str_match.toString();
                    str_match_replace = str_match.toString().replace(replace, replace.toUpperCase());
                    ankor_match_replace = ankor_match_replace.replace(str_match, str_match_replace);
                }
                // replace word inside title=" *"
                str_match = ankor_match_replace.match(title_reg);
                if (str_match) {
                    replace = str_match.toString().split('"')[1];
                    str_match_replace = str_match.toString().replace(replace, replace.toUpperCase());
                    ankor_match_replace = ankor_match_replace.replace(str_match, str_match_replace);
                }

                data = data.replace(ankor_match[i], ankor_match_replace);
            }
        }
        process.stdout.write(data);
    });
}
