import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CustomQuill({ ...passProps }) {
    const props = { ...passProps };

    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ color: [] }],
            [({ list: 'ordered' }, { list: 'bullet' })],
            ['link', 'image', 'video'],
            [{ align: [] }],
            ['clean'],
        ],
        clipboard: {
            matchVisual: false,
        },
    };

    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'color',
        'list',
        'bullet',
        'link',
        'image',
        'video',
        'align',
    ];

    return <ReactQuill theme="snow" modules={modules} formats={formats} {...props} />;
}

export default CustomQuill;
