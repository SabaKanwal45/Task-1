import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

import Media from '../../store/modules/media';

function useMedia() {
    const dispatch = useDispatch();
    const media = useSelector((store: RootState) => store.media);

    const fetchMediaListByUser = (params: string) => {
        dispatch(Media.actions.fetchMediaListByUser.request(params));
    };

    return {
        media,
        fetchMediaListByUser
    };
}

export default useMedia;
