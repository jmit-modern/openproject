I18n.translations || (I18n.translations = {});
I18n.translations["ko"] = I18n.extend((I18n.translations["ko"] || {}), {"date":{"abbr_day_names":["일","월","화","수","목","금","토"],"abbr_month_names":[null,"1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],"day_names":["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],"formats":{"default":"%m/%d/%Y","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],"order":[":년",":월",":일"]},"js":{"admin":{"type_form":{"add_group":"특성 그룹 추가","add_table":"관련 작업 패키지의 테이블 추가","custom_field":"사용자 정의 필드","drag_to_activate":"여기에서 필드를 끌어와서 활성화","edit_query":"쿼리 편집","inactive":"비활성화","new_group":"새 그룹","reset_to_defaults":"기본값으로 초기화"}},"ajax":{"hide":"숨기기","loading":"불러오는 중 ..."},"attachments":{"draggable_hint":"인라인 이미지 또는 참조 첨부 파일로 편집기 필드를 드래그하세요. 드래그하는 동안에는 닫힌 편집기 필드가 열립니다.\n"},"autocomplete_select":{"active":"%{label} %{name} 활성화","placeholder":{"multi":"\"%{name}\" 추가","single":"\"%{name}\" 선택"},"remove":"%{name} 삭제"},"avatars":{"empty_file_error":"유효한 이미지(jpg, png, gif)를 업로드하십시오.","error_image_too_large":"이미지가 너무 큽니다.","label_choose_avatar":"파일에서 아바타 선택","text_upload_instructions":"128 × 128픽셀 크기의 사용자 지정 아바타를 업로드하십시오. 더 큰 파일은 이 크기에 맞게 조정되고 잘립니다.\n이미지를 선택하면, 업로드하기 전에 아바타의 미리 보기가 표시됩니다.\n","uploading_avatar":"아바타를 업로드 중입니다.","wrong_file_format":"허용된 형식은 jpg, png, gif입니다."},"boards":{"add_card":"카드 추가","add_list":"목록 추가","board_type":{"action":"작업 보드","action_by_attribute":"작업 보드(%{attribute})","action_text":"단일 특성에서 필터가 적용한 목록을 사용하여 보드를 생성하십시오. 작업 패키지를 다른 목록으로 이동하면 해당 특성이 업데이트됩니다.\n","free":"기본 보드","free_text":"자유롭게 목록을 만들고 작업 패키지를 주문할 수 있는 보드를 생성하십시오. 목록 간에 작업 패키지를 이동해도 작업 패키지 자체는 변경되지 않습니다.\n","select_attribute":"작업 특성"},"click_to_remove_list":"이 목록을 제거하려면 클릭","configuration_modal":{"display_settings":{"card_mode":"카드로 표시","table_mode":"테이블로 표시"},"title":"이 보드 구성"},"error_attribute_not_writable":"작업 패키지를 이동할 수 없습니다. %{attribute}은(는) 쓰기 가능하지 않습니다.","error_loading_the_list":"목록 로드 중 오류 발생: %{error_message}","error_permission_missing":"공용 쿼리를 만들 수 있는 권한이 없습니다","label_board_type":"보드 유형","label_unnamed_board":"명명되지 않은 보드","label_unnamed_list":"명명되지 않은 목록","lists":{"delete":"목록 삭제"},"new_board":"새로운 보드","upsale":{"personal_demo":"개인 데모 이용","teaser_text":"이 유연한 보드 보기에서 애자일 프로젝트 관리를 개선하십시오. 계속 추적하고 싶은 사항에 따라 원하는 만큼 보드를 생성하십시오.","upgrade":"지금 업그레이드","upgrade_to_ee_text":"보드는 Enterprise 기능입니다. 유료 플랜으로 업그레이드하십시오."},"version":{"close_version":"버전 닫기","closed":"닫음","edit_version":"버전 편집","is_closed":"버전이 닫혔습니다. 이 버전에 항목을 추가할 수 없습니다.","is_locked":"버전이 잠겨 있습니다. 이 버전에 항목을 추가할 수 없습니다.","lock_version":"버전 잠금","locked":"잠김","open_version":"버전 열기","show_version":"버전 표시","unlock_version":"버전 잠금 해제"}},"button_add_watcher":"주시자 추가","button_advanced_filter":"고급 필터","button_back":"뒤로","button_back_to_list_view":"목록으로 돌아가기","button_cancel":"취소","button_change_project":"프로젝트 변경","button_check_all":"모두 선택","button_close":"닫기","button_close_details":"디테일 닫기","button_configure-form":"구성 양식","button_confirm":"확인","button_continue":"계속","button_copy":"복사","button_custom-fields":"사용자 정의 필드","button_delete":"삭제","button_delete_watcher":"주시자 삭제","button_details_view":"자세히","button_duplicate":"복제","button_edit":"편집","button_export-atom":"Atom 다운로드","button_export-pdf":"PDF 다운로드","button_filter":"필터","button_list_view":"목록 보기","button_log_costs":"단위 비용 기록","button_log_time":"작업시간 기록","button_more":"기타","button_open_details":"자세히 보기","button_open_fullscreen":"전체화면 보기","button_quote":"인용","button_save":"저장","button_settings":"설정","button_show_cards":"카드 보기 표시","button_show_list":"목록 보기 표시","button_show_view":"전체화면 보기","button_uncheck_all":"모두 선택 취소","button_update":"업데이트","calendar":{"title":"달력","too_many":"총 %{count}개 작업 패키지가 있지만, %{max}개만 표시할 수 있습니다."},"card":{"add_new":"새로운 카드를 추가하다","highlighting":{"entire_card_by":"전체 카드 기준","inline":"인라인 강조 표시:"},"remove_from_list":"목록에서 카드 제거"},"chart":{"axis_criteria":"축 기준","errors":{"could_not_load":"그래프를 표시하기 위한 데이터를 로드할 수 없습니다. 필요한 권한이 부족할 수 있습니다."},"modal_title":"작업 패키지 그래프 구성","tabs":{"dataset":"데이터 세트 %{number}","graph_settings":"일반"},"type":"차트 유형","types":{"bar":"막대","doughnut":"도넛형","horizontal_bar":"가로 막대","line":"라인","pie":"파이","polar_area":"극지방","radar":"레이더"}},"clipboard":{"browser_error":"브라우저를 클립보드에 복사를 지원 하지 않습니다. 텍스트를 타이핑하여 복사하십시오.","copied_successful":"클립보드에 성공적으로 복사됨"},"close_filter_title":"필터 닫기","close_form_title":"폼 닫기","close_popup_title":"팝업 닫기","custom_actions":{"date":{"current_date":"현재 날짜","specific":"에"}},"dashboards":{"label":"대시보드"},"description_available_columns":"사용 가능한 열","description_current_position":"사용자의 위치: ","description_select_work_package":"작업 패키지 #%{id} 선택","description_selected_columns":"선택된 열","description_subwork_package":"작업 패키지 #%{id}의 자식","editor":{"error_initialization_failed":"CKEditor를 초기화하지 못했습니다.","error_saving_failed":"다음 오류로 인해 문서를 저장하지 못했습니다: %{error}","macro":{"child_pages":{"button":"자식 페이지의 링크","hint":"현재 페이지의 모든 자식 페이지를 나열하려면 이 필드를 비워두세요. 다른 페이지를 참조하려는 경우 해당 제목 또는 슬러그를 제공하세요.\n","include_parent":"부모 포함","page":"위키 페이지","text":"다음에 대한 자식 페이지의 [Placeholder] 링크:","this_page":"이 페이지"},"code_block":{"button":"코드 조각 삽입","language":"서식 언어","language_hint":"강조 표시(지원되는 경우)에 사용할 서식 언어를 입력하세요.","title":"코드 조각 삽입/편집"},"dropdown":{"chose_macro":"매크로 선택","macros":"매크로"},"embedded_calendar":{"text":"[Placeholder] 포함 달력"},"embedded_table":{"button":"작업 패키지 테이블 포함","text":"[Placeholder] 포함 작업 패키지 테이블"},"toc":"목차","toolbar_help":"위젯을 선택하고 도구 모음을 표시하려면 클릭하세요. 위젯을 편집하려면 두 번 클릭하세요.","wiki_page_include":{"button":"다른 위키 페이지의 콘텐츠 포함","hint":"제목이나 슬러그를 지정하여 다른 위키 페이지의 콘텐츠를 포함하세요.\n다음 예처럼 다른 프로젝트의 위키 페이지를 콜론으로 구분하여 포함할 수 있습니다.\n","not_set":"(페이지 아직 설정 안 됨)","page":"위키 페이지","text":"[Placeholder]에 다음의 위키 페이지 포함됨:"},"work_package_button":{"button":"작업 패키지 만들기 버튼 삽입","button_style":"버튼 스타일 사용","button_style_hint":"옵션: 링크가 아니라 버튼으로 매크로가 나타나게 하려면 선택하세요.","type":"작업 패키지 유형","with_type":"작업 패키지 만들기(유형: %{typename})","without_type":"작업 패키지 만들기"}},"mode":{"manual":"Markdown 소스로 전환","wysiwyg":"WYSIWYG 편집기로 전환"},"preview":"미리 보기 모드 토글","source_code":"Markdown 소스 모드 토글"},"error":{"cannot_save_changes_with_message":"다음 오류로 인해 변경 사항을 저장할 수 없습니다: %{error}","embedded_table_loading":"포함된 보기를 로드할 수 없습니다: %{message}","internal":"내부 오류가 발생하였습니다.","query_saving":"보기를 저장할 수 없습니다."},"error_attachment_upload":"파일 업로드 실패: %{error}","error_attachment_upload_permission":"이 리소스에서 파일을 업로드할 수 있는 권한이 없습니다.","error_could_not_resolve_user_name":"사용자 이름을 확인할 수 없습니다.","error_could_not_resolve_version_name":"버전 이름을 확인할 수 없습니다.","field_value_enter_prompt":"'%{field}'에 대 한 값을 입력하세요.","filter":{"description":{"text_close_filter":"항목을 선택하려면 예를 들어 Enter를 눌러 초점을 유지합니다. 필터 없이 두려면 첫 번째(빈) 항목을 선택합니다.","text_open_filter":"'ALT'와 화살표 키로 이 필터를 여세요."},"noneElement":"(없음)","sorting":{"criteria":{"one":"첫 번째 정렬 기준","three":"세 번째 정렬 기준","two":"두 번째 정렬 기준"}},"time_zone_converted":{"only_end":"현지 시간으로 %{to} 까지","only_start":"현지 시간으로 %{from} 에서","two_values":"현지 시간으로 %{from} - %{to}"},"upsale_for_more":"추가 고급 필터는 다음을 확인하세요:","upsale_link":"Enterprise Edition.","value_spacer":"-"},"general_text_No":"아니요","general_text_Yes":"예","general_text_no":"아니요","general_text_yes":"예","global_search":{"all_projects":"모든 프로젝트에서","close_search":"검색 닫기","current_project":"이 프로젝트에서","current_project_and_all_descendants":"이 프로젝트 + 하위 프로젝트에서","search":"검색","title":{"all_projects":"모든 프로젝트","project_and_subprojects":"그리고 모든 하위 프로젝트","search_for":"검색:"}},"grid":{"add_widget":"위젯 추가","remove":"위젯 제거","upsale":{"link":"Enterprise Edition.","text":"작업 패키지 그래프 위젯 같은 일부 위젯은 다음에서만 사용 가능합니다: "},"widgets":{"custom_text":{"title":"사용자 지정 텍스트"},"documents":{"no_results":"아직 문서가 없습니다.","title":"문서"},"members":{"add":"멤버","no_results":"표시할 멤버가 없습니다.","title":"멤버","too_many":"%{count}/%{total}명의 멤버를 표시 중입니다.","view_all_members":"모든 회원 보기"},"news":{"at":"-","no_results":"새로 보고할 것이 없음","title":"뉴스"},"project_description":{"no_results":"설명이 아직 작성되지 않았습니다. '프로젝트 설정'에서 입력할 수 있습니다.","title":"프로젝트 설명"},"project_details":{"no_results":"프로젝트에 대한 사용자 지정 필드가 정의되지 않았습니다.","title":"프로젝트 세부 정보"},"project_status":{"at_risk":"위험 상태","not_set":"설정되지 않음","off_track":"비정상 상태","on_track":"정상 상태","title":"프로젝트 상태"},"subprojects":{"no_results":"하위 프로젝트가 없습니다.","title":"하위 프로젝트"},"time_entries_list":{"no_results":"지난 7일간 시간 항목이 없습니다.","title":"경과 시간(지난 7 일)"},"work_packages_accountable":{"title":"내가 담당하는 작업 패키지"},"work_packages_assigned":{"title":"내게 할당된 작업 패키지"},"work_packages_calendar":{"title":"달력"},"work_packages_created":{"title":"내가 만든 작업 패키지"},"work_packages_graph":{"title":"작업 패키지 그래프"},"work_packages_overview":{"placeholder":"편집하려면 클릭...","title":"작업 패키지 개요"},"work_packages_table":{"title":"작업 패키지 테이블"},"work_packages_watched":{"title":"내가 본 작업 패키지"}}},"hal":{"error":{"edit_prohibited":"%{attribute} 편집은 이 리소스에 대해 차단되었습니다. 이 특성은 관계(예: 자식)에서 파생되었거나 그렇지 않으면 구성할 수 없습니다.","format":{"date":"%{attribute}은(는) 유효한 날짜가 아닙니다. YYYY-MM-DD여야 합니다."},"general":"오류가 발생했습니다.","update_conflict_refresh":"리소스를 새로 고치고 최신 버전으로 업데이트하려면 여기를 클릭하세요."}},"help_texts":{"show_modal":"특성 도움말 텍스트 항목 표시"},"homescreen":{"blocks":{"new_features":{"current_new_feature_html":"OpenProject에는 \u003cb\u003e중요 프로젝트 정보를 표시하고\u003c/b\u003e 프로젝트가 정상 상태인지 나타내는 새로운 \u003cb\u003e요약 페이지\u003c/b\u003e가 포함되어 있습니다. \u003c/br\u003e 사용자는 다양한 새로운 상태 위젯을 삽입할 수 있습니다. 예: \u003cul\u003e\u003cli\u003e프로젝트 상태,\u003c/li\u003e \u003cli\u003e작업 패키지 상태 개요,\u003c/li\u003e \u003cli\u003e작업 진행률,\u003c/li\u003e \u003cli\u003e사용자에게 할당된 작업.\u003c/li\u003e\u003c/ul\u003e","learn_about":"새로운 상태 위젯에 대해 자세히 알아보기","text_new_features":"새로운 기능 및 제품 업데이트에 대해 읽어보십시오."}}},"inplace":{"btn_preview_disable":"미리보기 사용 안 함","btn_preview_enable":"미리 보기","button_cancel":"%{attribute}: 취소","button_cancel_all":"취소","button_edit":"%{attribute}: 편집","button_save":"%{attribute}: 저장","button_save_all":"저장","clear_value_label":"-","errors":{"maxlength":"%{field} 에는 %{maxLength} 보다 큰 수를 입력 할 수 없습니다.","messages_on_field":"%{messages} 는 유효하지 않습니다.","minlength":"%{field} 에는 %{minLength} 보다 적은 수를 입력 할 수 없습니다.","number":"%{field}은(는) 올바른 번호가 아닙니다.","required":"%{field}은(는) 비워둘 수 없습니다."},"link_formatting_help":"텍스트 서식 지정 도움말","null_value_label":"값 없음"},"label_activate":"활성화","label_activity_show_all":"모든 활동 표시","label_activity_show_only_comments":"코멘트가 있는 활동만 표시","label_add_attachments":"첨부 파일 추가","label_add_column_after":"다음 뒤에 열 추가","label_add_column_before":"다음 앞에 열 추가","label_add_columns":"열 추가","label_add_comment":"댓글 달기","label_add_comment_title":"코멘트를 기입하고 @을 입력하여 다른 사람에게 알려주기","label_add_description":"%{file} 의 설명 추가","label_add_row_after":"다음 뒤에 행 추가","label_add_row_before":"다음 앞에 행 추가","label_add_selected_columns":"선택된 열 추가","label_added_by":"추가함 : ","label_added_time_by":"%{author} %{age}가 추가함","label_ago":"일 전","label_all":"모두","label_all_work_packages":"모든 작업 패키지","label_and":"그리고","label_ascending":"오름차순","label_attachments":"파일","label_author":"작성자: %{user}","label_between":"사이에","label_board":"게시판","label_board_locked":"잠김","label_board_plural":"보드","label_board_sticky":"스티커형","label_cancel_comment":"코멘트 취소","label_closed_work_packages":"닫음","label_collapse":"축소","label_collapse_all":"모두 축소","label_collapsed":"축소","label_columns":"컬럼","label_comment":"코멘트","label_committed_at":"%{date}에 %{committed_revision_link} ","label_committed_link":" %{revision_identifier} 리비전이 커밋됨","label_contains":"포함","label_create":"만들기","label_create_work_package":"새 작업 패키지 만들기","label_created_by":"작성자","label_created_on":"생성","label_custom_queries":"비공개 보기","label_date":"날짜","label_date_with_format":"%{date_attribute} 는 %{format} 과 같이 입력되어야 합니다.","label_deactivate":"비활성화","label_default_queries":"기본 보기","label_descending":"내림차순","label_description":"설명","label_drop_files":"여기에 파일을 놓으세요","label_drop_files_hint":"또는 파일을 추가 하려면 클릭하세요","label_drop_folders_hint":"폴더를 첨부 파일로 업로드할 수 없습니다. 단일 파일을 선택하세요.","label_edit_comment":"코멘트 편집","label_edit_status":"작업 패키지 상태 편집","label_equals":"일치함","label_expand":"확장","label_expand_all":"모두 확장","label_expand_project_menu":"프로젝트 메뉴 확장","label_expanded":"확장됨","label_export":"내보내기","label_filename":"파일","label_files_to_upload":"이 파일들이 업로드 됩니다.","label_filesize":"크기","label_formattable_attachment_hint":"이 필드에 놓거나 클립보드에서 붙여넣어 파일을 첨부하고 연결하세요.","label_global_queries":"공개 보기","label_greater_or_equal":"\u003e=","label_group":"그룹","label_group_by":"그룹화 기준","label_hide_attributes":"간단히 표시","label_hide_column":"열 숨기기","label_hide_project_menu":"프로젝트 메뉴 축소","label_hour":"시간","label_hours":"시간","label_import":"가져오기","label_in":"-","label_in_less_than":"보다 작음","label_in_more_than":"보다 큼","label_last_updated_on":"마지막 업데이트 날짜","label_latest_activity":"최근 활동","label_less_or_equal":"\u003c=","label_less_than_ago":"일 미만 전","label_loading":"로드 중...","label_me":"나","label_menu_collapse":"축소","label_menu_expand":"확장","label_more_than_ago":"일 이상 전","label_next":"다음","label_no_color":"색상 없음","label_no_data":"표시할 데이터가 없습니다.","label_no_due_date":"종료일이 지정되지 않음","label_no_start_date":"시작일이 지정되지 않음","label_no_value":"값 없음","label_none":"없음","label_not_contains":"포함하지 않음","label_not_equals":"일치하지 않음","label_on":"에","label_open_context_menu":"콘텍스트 메뉴 열기","label_open_menu":"메뉴 열기","label_open_work_packages":"열기","label_password":"암호","label_per_page":"페이지 당:","label_please_wait":"잠시 기다려 주세요.","label_press_enter_to_save":"저장하려면 Enter를 누르세요.","label_preview":"미리 보기","label_previous":"이전","label_public_query":"공용","label_quote_comment":"코멘트 인용","label_rejected_files":"파일들이 업로드 할 수 없습니다.","label_rejected_files_reason":"파일 사이즈가 %{maximumFilesize} 보다 크기 때문에 업로드할 수 없습니다.","label_remove_all_files":"모든 파일을 삭제","label_remove_column":"열 제거","label_remove_columns":"선택된 열 제거","label_remove_file":"%{fileName} 삭제","label_remove_row":"행 제거","label_remove_watcher":"관찰자 %{name} 제거","label_reset":"재설정","label_save_as":"다른 이름으로 저장","label_select_watcher":"주시하는 사람을 선택","label_selected_filter_list":"선택된 필터","label_show_attributes":"모든 특성 표시","label_show_in_menu":"메뉴에서 보기 표시","label_sort_by":"정렬 기준","label_sort_higher":"위로 이동","label_sort_lower":"아래로 이동","label_sorted_by":"정렬 :","label_sorting":"정렬","label_star_query":"호감","label_starred_queries":"즐겨 찾는 보기","label_subject":"제목","label_sum":"합계","label_sum_for":"합계 ","label_this_week":"이번 주","label_today":"오늘","label_total_amount":"합계: %{amount}","label_total_progress":"%{percent}% 진행","label_unwatch":"주시 안 함","label_unwatch_work_package":"작업 패키지 주시 해제","label_up":"위","label_updated_on":"업데이트 :","label_upload_counter":"%{count} 개 파일 중 %{done} 개 파일 완료됨","label_upload_notification":"파일 업로드 중...","label_uploaded_by":"업로드 : ","label_validation_error":"다음 오류로 인해 작업 패키지를 저장할 수 없습니다.","label_value_derived_from_children":"(자식에서 파생된 값)","label_view_has_changed":"이 보기에는 저장되지 않은 변경 사항이 있습니다. 클릭하여 저장하십시오.","label_visibility_settings":"표시 여부 설정","label_wait":"설정 중이므로 기다려 주세요...","label_warning":"경고","label_watch":"주시","label_watch_work_package":"작업 패키지 주시","label_watcher_added_successfully":"주시하는 사람이 추가되었습니다.","label_watcher_deleted_successfully":"주시하는 사람이 삭제되었습니다.","label_work_package":"작업 패키지","label_work_package_details_you_are_here":"%{type} %{subject}에 대한 %{tab} 탭에 있습니다.","label_work_package_plural":"작업 패키지","label_work_package_upload_notification":"작업 패키지 #%{id}: %{subject} 를 위한 파일 업로딩","label_wp_id_added_by":"#%{id} - %{author}님이 추가함","modals":{"button_apply":"적용","button_cancel":"취소","button_save":"저장","button_submit":"제출","destroy_work_package":{"confirm_deletion_children":"나는 작업 패키지의 모든 하위 목록이 재귀적으로 제거되는 것을 인정합니다.","deletes_children":"모든 하위 작업 패키지 및 그 하위 항목도 재귀적으로 삭제됩니다.","has_children":"작업 패키지에 %{childUnits}이(가) 있습니다.","text":"다음 %{label}을(를) 삭제하시겠습니까?","title":"%{label} 삭제 확인"},"form_submit":{"text":"정말로 이 작업을 수행하기를 원하시나요?","title":"계속하려면 확인하세요"},"label_delete_page":"현재 페이지 삭제","label_name":"이름","label_settings":"보기 이름 바꾸기"},"my_page":{"label":"내 페이지"},"notice_bad_request":"잘못된 요청입니다.","notice_no_results_to_display":"표시할 결과가 없습니다.","notice_successful_create":"생성에 성공했습니다.","notice_successful_delete":"삭제에 성공했습니다.","notice_successful_update":"업데이트에 성공했습니다.","onboarding":{"buttons":{"got_it":"확인","next":"다음","skip":"건너뛰기"},"steps":{"backlogs":{"overview":"\u003cb\u003e백로그\u003c/b\u003e 보기에서 작업을 관리하세요. \u003cbr\u003e 오른쪽에 제품 백로그 또는 버그 백로그가 있고, 왼쪽에 해당 스프린트가 있습니다. 여기에서 \u003cb\u003e에픽, 사용자 이야기 및 버그\u003c/b\u003e를 작성하고 드래그 앤 드롭으로 우선 순위를 정하고 스프린트에 추가할 수 있습니다.","task_board":"\u003cb\u003e작업 보드\u003c/b\u003e는 이 스프린트의 진행률을 시각화합니다. 사용자 이야기 옆에 있는 + 아이콘을 사용하여 새 작업이나 제한을 추가하세요. 드래그 앤 드롭으로 상태를 업데이트할 수 있습니다.","task_board_arrow":"\u003cb\u003e작업 보드\u003c/b\u003e를 보려면 스프린트 드롭다운을 여세요...","task_board_select":"... 그리고 \u003cb\u003e작업보드\u003c/b\u003e 항목을 선택하세요."},"boards":{"add":"+를 클릭하면 보드의 목록에 \u003cb\u003e새로운 카드가 추가\u003c/b\u003e됩니다.","drag":"목록에서 카드를 끌어다 놓아 다시 정렬하거나, 다른 목록으로 끌어오십시오. 두 번 클릭하면 상세 보기가 열립니다.","lists":"하나의 보드 보기에서 여러 목록(열)을 만들 수 있습니다. 예를 들어, KANBAN 보드를 만들 수 있습니다.","overview":"직관적인 \u003cb\u003e보드\u003c/b\u003e 보기에서 작업을 관리하십시오."},"help_menu":"\u003cb\u003e도움말\u003c/b\u003e 메뉴에서 사용자 가이드 및 추가 도움말 리소스를 찾아볼 수 있습니다. \u003cbr\u003e OpenProject에서 즐겁게 작업하세요!","members":"프로젝트에 참여할 새로운 \u003cb\u003e멤버\u003c/b\u003e를 초대하세요.","project_selection":"시작하려면 유용한 데모 데이터가 포함된 프로젝트 중 하나를 클릭하십시오. \u003cbr\u003e \u003cb\u003e데모 프로젝트\u003c/b\u003e는 클래식 프로젝트 관리에 최적이지만, 애자일 프로젝트 관리에는 \u003cb\u003e스크럼 프로젝트\u003c/b\u003e가 더 적합합니다.","sidebar_arrow":"화살표를 사용하여 프로젝트의 \u003cb\u003e기본 메뉴\u003c/b\u003e로 다시 돌아갈 수 있습니다.","welcome":"3분 소개 투어를 보고 가장 \u003cb\u003e중요한 기능\u003c/b\u003e에 대해 알아보세요. \u003cbr\u003e 끝까지 단계를 완료하는 것이 좋습니다. 언제든지 투어를 다시 시작할 수 있습니다.","wiki":"\u003cb\u003eWiki\u003c/b\u003e에서 문서화하고 팀과 함께 지식을 공유할 수 있습니다.","wp":{"back_button":"화살표를 사용하여 작업 패키지 목록으로 돌아갈 수 있습니다.","create_button":"\u003cb\u003e만들기\u003c/b\u003e 버튼은 프로젝트에 새로운 작업 패키지를 추가합니다.","full_view":"\u003cb\u003e작업 패키지 세부 정보\u003c/b\u003e에서 설명, 상태 및 우선 순위, 활동, 종속성 또는 코멘트 등 모든 관련 정보를 찾아볼 수 있습니다.","list":"작업, 기능, 마일스톤, 버그 등 프로젝트 내 중요 작업이 포함된 \u003cb\u003e작업 패키지\u003c/b\u003e 목록입니다. \u003cbr\u003e 목록에서 바로 작업 패키지를 만들거나 편집할 수 있습니다. 해당 세부 정보를 보려면 행을 두 번 클릭하면 됩니다.","timeline":"여기에서 프로젝트 계획을 편집할 수 있습니다. 새로운 단계, 마일스톤을 만들고 종속성을 추가하세요. 모든 팀원이 언제든지 최신 계획을 보고 업데이트할 수 있습니다.","timeline_button":"\u003cb\u003eGantt 차트\u003c/b\u003e를 활성화하여 프로젝트의 타임라인을 만들 수 있습니다.","toggler":"이제 \u003cb\u003e작업 패키지\u003c/b\u003e 섹션을 살펴보겠습니다. 이 섹션에서는 작업의 자세한 보기가 제공됩니다."}}},"overviews":{"label":"요약"},"pagination":{"no_other_page":"유일한 페이지에 있습니다.","pages":{"next":"다음 페이지로","previous":"전 페이지로"}},"password_confirmation":{"field_description":"이 변경 내용을 확인하려면 계정 암호를 입력해야 합니다.","title":"계속하려면 암호 확인"},"placeholders":{"default":"-","relation_description":"이 관계에 대한 설명을 추가하려면 클릭","selection":"선택하십시오","subject":"여기에 제목 입력"},"project":{"autocompleter":{"label":"프로젝트 자동완성"},"click_to_switch_context":"해당 프로젝트에서 이 작업 패키지를 여세요.","context":"프로젝트 컨텍스트","required_outside_context":"모든 특성을 보려면 작업 패키지를 만들 프로젝트를 선택하십시오. 위 유형이 활성화된 프로젝트만 선택할 수 있습니다.\n","work_package_belongs_to":"이 작업 패키지는 프로젝트 %{projectname}에 속합니다."},"project_menu_details":"세부 정보","relation_buttons":{"abort":"중단","add_existing":"기존 추가","add_existing_child":"기존 자식 추가","add_existing_relation":"기존 관계 추가","add_follower":"팔로워 추가","add_new_child":"새 자식 만들기","add_new_relation":"새 관계 만들기","add_parent":"기존 부모 추가","add_predecessor":"선행 단계 추가","change_parent":"부모 변경","create_new":"새로 만들기","group_by_relation_type":"관계 유형별 그룹화","group_by_wp_type":"작업 패키지 유형별 그룹화","hierarchy_indent":"계층 들여쓰기","hierarchy_outdent":"계층 내어쓰기","remove":"관계 제거","remove_child":"자식 제거","remove_parent":"부모 제거","save":"관계 저장","set_parent":"부모 설정","toggle_description":"토글 관계 설명","update_description":"이 관계의 설명 설정 또는 업데이트","update_relation":"관계 타입을 변경하려면 클릭하세요"},"relation_labels":{"blocked":"차단한 사용자","blocks":"차단","children":"하위","duplicated":"복제한 사용자","duplicates":"중복","follows":"팔로우","includes":"포함","parent":"부모","partof":"부분의","precedes":"선행","relates":"관련 항목","relation_type":"관계 유형","required":"다음에서 필요로 함:","requires":"요구"},"relations":{"empty":"관계가 없습니다.","remove":"관계 제거"},"relations_autocomplete":{"parent_placeholder":"새로운 상위 항목은 선택하거나 Escape를 눌러 취소하십시오.","placeholder":"검색할 유형"},"relations_hierarchy":{"children_headline":"하위","hierarchy_headline":"계층 구조","parent_headline":"부모"},"reporting_engine":{"label_remove":"Delete","label_response_error":"There was an error handling the query."},"repositories":{"select_branch":"브랜치 선택","select_tag":"태그 선택"},"select2":{"input_too_short":{"other":"{{count}} 이상의 글자를 입력해 주십시오."},"load_more":"더 많은 결과를 불러오고 있습니다 ...","no_matches":"조건에 맞는 결과가 없습니다.","searching":"찾는 중 ...","selection_too_big":{"other":"{{limit}}개만 선택하실 수 있습니다."}},"sort":{"activate_asc":"오름차순 정렬 적용을 위해 활성화합니다","activate_dsc":"내림차순 정렬 적용을 위해 활성화합니다","activate_no":"정렬을 제거하기 위해 활성화합니다","sorted_asc":"오름차순 정렬이 적용됨, ","sorted_dsc":"내림차순 정렬이 적용됨, ","sorted_no":"정렬이 적용되지 않음, ","sorting_disabled":"정렬이 불가능합니다"},"text_are_you_sure":"계속하시겠습니까?","text_attachment_destroy_confirmation":"정말 이 첨부 파일을 삭제 하시겠습니까?","text_query_destroy_confirmation":"선택한 보기를 삭제하시겠습니까?","text_work_packages_destroy_confirmation":"선택한 작업 패키지를 삭제하시겠습니까?","time_entry":{"activity":"활동","comment":"코멘트","hours":"시간"},"timelines":{"button_activate":"Gantt 차트 표시","button_deactivate":"Gantt 차트 숨기기","cancel":"취소","change":"계획에서 변경","due_date":"완료 날짜","empty":"(비어 있음)","error":"오류가 발생했습니다.","errors":{"not_implemented":"아직 구현되지 않은 기능을 사용하기 때문에 타임라인을 렌더링할 수 없습니다.","report_comparison":"타임라인은 구성된 비교를 렌더링할 수 없습니다. 구성에서 적절한 섹션을 확인하세요. 이를 재설정하면 이 문제가 해결될 수 있습니다.","report_epicfail":"예기치 않은 오류로 인해 타임라인을 로드할 수 없습니다.","report_timeout":"적절한 시간에 타임라인을 로드할 수 없습니다."},"filter":{"grouping_other":"기타","noneSelection":"(없음)"},"gantt_chart":"Gantt 차트","labels":{"bar":"막대 레이블","description":"항상 Gantt 차트의 각 위치에 표시할 특성을 선택하세요. 요소를 가리키면 해당 특성 대신 날짜 레이블이 표시됩니다.\n","farRight":"맨 오른쪽","left":"왼쪽","right":"오른쪽","showNone":"-- 레이블 없음 --","title":"레이블 구성"},"name":"이름","outline":"윤곽 재설정","outlines":{"aggregation":"집계만 표시","all":"모두 표시","level1":"확장 수준 1","level2":"확장 수준 2","level3":"확장 수준 3","level4":"확장 수준 4","level5":"확장 수준 5"},"project_status":"프로젝트 상태","quarter_label":"Q%{quarter_number}","really_close_dialog":"입력된 자료를 저장하지 않고 대화상자를 닫으시겠습니까?","responsible":"책임","save":"저장","selection_mode":{"notification":"강조 표시된 작업 패키지를 클릭하여 관계를 만드세요. 취소하려면 ESC 키를 누르세요."},"start_date":"시작 날짜","tooManyProjects":"프로젝트 수가 %{count}개를 초과합니다. 검색 조건을 좁히시기 바랍니다.","zoom":{"auto":"자동 확대/축소","days":"일","description":"자동 확대/축소를 사용할 수 없는 경우 표시되어야 하는 초기 확대/축소 수준을 선택하세요.\n","in":"확대","months":"개월","out":"축소","quarters":"분기","slider":"줌 슬라이더","weeks":"주","years":"년"}},"tl_toolbar":{"outlines":"계층 수준","zooms":"확대 수준"},"toolbar":{"filter":"필터","placeholder_query_title":"이 보기에 대한 제목 설정","search_query_label":"저장된 보기 검색","search_query_title":"저장된 보기를 검색하려면 클릭하세요.","settings":{"columns":"열...","configure_view":"보기 구성...","delete":"삭제","display_hierarchy":"계층 보이기","display_sums":"합계 표시","export":"내보내기...","group_by":"그룹화 기준...","hide_hierarchy":"계층 숨기기","hide_sums":"합계 숨기기","page_settings":"보기 이름 바꾸기...","save":"저장","save_as":"다른 이름으로 저장...","sort_by":"정렬 기준...","visibility_settings":"표시 여부 설정..."},"unselected_title":"작업 패키지"},"types":{"attribute_groups":{"confirm_reset":"경고: 양식 구성을 재설정하시겠습니까? 그러면 특성이 기본 그룹으로 재설정되고, 모든 사용자 지정 필드가 비활성화됩니다.\n","error_duplicate_group_name":"%{group} 이라는 그룹 이름은 한 번 이상 사용되었습니다. 그룹 이름은 중복될 수 없습니다.","error_no_table_configured":"%{group}에 대한 테이블을 구성하세요.","filter_types":{"blocked":"차단한 사용자","blocks":"차단","duplicated":"복제한 사용자","duplicates":"복제","follows":"다음","includes":"포함","parent":"다음의 자식:","partof":"다음의 일부:","precedes":"이전","relates":"관련","required":"다음에 의해 요구됨:","requires":"요구"},"more_information":"더보기","nevermind":"신경쓰지 마세요","reset_title":"구성 양식 초기화","upgrade_to_ee":"Enterprise Edition으로 업그레이드 하세요.","upgrade_to_ee_text":"와우! 만약 이 기능이 필요하다면 당신은 진짜 프로입니다! Enterprise Edition 고객이 되어서 OpenSource 개발자들을 지원할 생각이 있나요?"}},"units":{"child_work_packages":{"other":"%{count}개의 작업 패키지 자식"},"hour":{"other":"%{count}시간"},"workPackage":{"other":"작업 패키지"}},"upsale":{"ee_only":"Enterprise Edition 전용 기능"},"views":{"card":"카드","list":"테이블","timeline":"Gantt"},"watchers":{"label_add":"주시자 추가","label_discard":"선택 취소","label_error_loading":"관찰자를 로드하는 동안 오류가 발생 했습니다.","label_loading":"관찰자 로딩 중...","label_search_watchers":"관찰자 검색","typeahead_placeholder":"가능한 전문가를 검색합니다"},"wiki_formatting":{"code":"인라인 코드","deleted":"삭제됨","heading1":"제목 1","heading2":"제목 2","heading3":"제목 3","image":"이미지","italic":"기울임꼴","ordered_list":"정렬된 목록","preformatted_text":"서식 설정되어 있는 텍스트","quote":"인용","strong":"굵게","underline":"밑줄","unordered_list":"정렬되지 않은 목록","unquote":"인용 끝","wiki_link":"위키 페이지에 연결"},"work_packages":{"bulk_actions":{"copy":"대량 복사","delete":"대량 삭제","edit":"대량 편집","move":"프로젝트의 일괄 변경"},"button_clear":"선택 취소","comment_added":"코멘트가 성공적으로 추가 되었습니다.","comment_send_failed":"오류가 발생했습니다. 코멘트를 제출할 수 없습니다.","comment_updated":"코멘트가 성곡적으로 갱신되었습니다.","confirm_edit_cancel":"편집 중인 작업 패키지를 취소하시겠습니까?","copy":{"title":"작업 패키지 복사"},"create":{"button":"만들기","header":"새 %{type}","header_no_type":"새 작업 패키지(유형이 아직 설정 안 됨)","header_with_parent":"새 %{type}(%{parent_type} #%{id}의 자식)","title":"새 작업 패키지"},"default_queries":{"all_open":"모두 열림","assigned_to_me":"내게 할당됨","created_by_me":"내가 만듦","latest_activity":"최근 활동","recently_created":"최근에 만듦","summary":"요약"},"description_enter_text":"텍스트 입력","description_filter":"필터","description_options_hide":"옵션 숨기기","description_options_show":"옵션 표시","edit_attribute":"%{attribute}-편집","faulty_query":{"description":"보기가 잘못되어 처리할 수 없습니다.","title":"작업 패키지를 로드할 수 없습니다."},"hierarchy":{"children_collapsed":"%{level} 의 계층 레벨은 붕괴되었습니다. 필터링된 것을 보이려면 클릭하세요.","children_expanded":"%{level} 의 계층 레벨은 확장되었습니다. 필터링된 것을 붕괴하려면 클릭하세요.","hide":"계층 모드 숨기기","leaf":"작업 패키지 리프는 %{level} 레벨입니다.","show":"계층 모드 보이기","toggle_button":"계층 모드를 전환하려면 클릭하세요"},"inline_create":{"title":"이 목록에 새 작업 패키지를 추가하려면 여기를 클릭하세요."},"jump_marks":{"content":"내용으로 이동","label_content":"메뉴를 건너뛰고 내용으로 이동하려면 여기를 클릭하세요.","label_pagination":"여기를 클릭하여 작업 패키지 테이블로 건너뛰고 페이지 매김으로 이동","pagination":"테이블 페이지 매김으로 이동"},"key_value":"%{key}: %{value}","label_column_multiselect":"결합된 드롭다운 필드: 화살표 키로 선택, Enter로 선택 확인, 백스페이스로 삭제","label_disable_multi_select":"다중 선택 사용 안 함","label_enable_multi_select":"다중 선택 사용","label_filter_add":"필터 추가","label_filter_by_text":"텍스트로 필터링","label_options":"옵션","limited_results":"수동 정렬 모드에서는 %{count}개 작업 패키지만 표시할 수 있습니다. 필터링으로 결과를 줄이십시오.","message_error_during_bulk_delete":"작업 패키지를 삭제하는 동안 오류가 발생했습니다.","message_successful_bulk_delete":"성공적으로 작업 패키지를 삭제했습니다.","message_successful_show_in_fullscreen":"전체 화면 보기에서 이 작업 패키지를 열려면 여기를 클릭하세요.","message_view_spent_time":"이 작업 패키지에 대해 소비한 시간 표시","message_work_package_read_only":"작업 패키지가 이 상태로 잠겨 있습니다. 상태 이외의 특성은 변경할 수 없습니다.","message_work_package_status_blocked":"닫힌 상태이고 닫힌 버전이 할당되었기 때문에 작업 패키지 상태를 쓸 수 없습니다.","no_results":{"description":"만든 작업 패키지가 없거나 모든 작업 패키지가 필터링에서 제외되었습니다.","title":"표시할 작업 패키지가 없습니다."},"placeholder_filter_by_text":"제목, 설명, 코멘트, ...","placeholders":{"default":"-","formattable":"%{name}: 클릭하여 편집..."},"properties":{"assignee":"담당자","author":"작성자","category":"카테고리","costObject":"예산","createdAt":"작성일","date":"날짜","description":"설명","dueDate":"완료 날짜","estimatedTime":"예상된 시간","overallCosts":"전체 비용","percentageDone":"완료율","priority":"우선 순위","projectName":"프로젝트","remainingTime":"남은 시간","responsible":"책임","spentTime":"소비한 시간","spentUnits":"소비 단위","startDate":"시작 날짜","status":"상태","storyPoints":"스토리 포인트","subject":"제목","title":"제목","type":"타입","updatedAt":"업데이트 날짜","version":"버전","versionName":"버전"},"property_groups":{"costs":"비용","details":"세부 정보","estimatesAndTime":"견적 \u0026 시간","other":"기타","people":"사용자"},"query":{"click_to_edit_query_name":"이 보기의 제목을 편집하려면 클릭하세요.","column_names":"컬럼","confirm_edit_cancel":"이 보기 이름 편집을 취소하시겠습니까? 제목이 이전 값으로 다시 설정됩니다.","display_sums":"합계 표시","errors":{"duplicate_query_title":"이 보기의 이름이 이미 존재합니다. 그래도 변경하시겠습니까?","not_found":"해당 보기가 없습니다.","unretrievable_query":"URL에서 보기를 검색할 수 없음"},"filters":"필터","group":"그룹화 기준","group_by":"그룹 결과","group_by_disabled_by_hierarchy":"계층 모드가 활성화되어서 그룹화가 불가능합니다.","hide_column":"열 숨기기","hierarchy_disabled_by_group_by":"결과가 %{column} 에 의해 그룹화되어서 계층 모드가 불가능합니다.","insert_columns":"열 삽입...","move_column_left":"왼쪽으로 열 이동","move_column_right":"오른쪽으로 열 이동","public_text":"다른 사용자가 이 보기에 액세스할 수 있도록 하려면 이 보기를 게시하십시오. \"공용 보기 관리\" 권한을 가진 사용자가 공용 쿼리를 수정 또는 제거할 수 있습니다. 이는 해당 보기에서 작업 패키지 결과의 표시 여부에 영향을 주지 않기 때문에 사용자의 권한에 따라 다른 결과가 표시될 수 있습니다.\n","rename_query_placeholder":"이 보기의 이름","sort_ascending":"오름차순 정렬","sort_descending":"내림차순 정렬","star_text":"이 보기를 즐겨찾기로 표시하고 왼쪽의 저장된 보기 사이드바에 추가하십시오.","text_no_results":"일치하는 보기가 없습니다."},"table":{"configure_button":"작업 패키지 테이블 구성","summary":"작업 패키지의 행 및 작업 패키지 특성의 열이 있는 테이블.","text_inline_edit":"이 테이블의 셀 대부분은 해당 특성의 인라인 편집 기능을 활성화하는 버튼입니다.","text_select_hint":"선택 상자는 'ALT'와 화살표 키로 열어야 합니다.","text_sort_hint":"테이블 헤더의 링크를 사용하여 테이블 열을 정렬, 그룹화, 다시 정렬, 제거, 추가할 수 있습니다."},"table_configuration":{"button":"이 작업 패키지 테이블 구성","choose_display_mode":"다음으로 작업 패키지 표시","columns_help_text":"위 입력을 사용하여 테이블 보기에 열을 추가하거나 제거하세요. 열을 끌어다 놓아 순서를 바꿀 수 있습니다.","default":"기본값","default_mode":"플랫 목록","display_settings":"디스플레이 설정","display_sums_hint":"테이블 결과 아래 행에 모든 집계 가능한 특성의 합계를 표시합니다.","embedded_tab_disabled":"이 구성 탭은 사용자가 편집하고 있는 포함된 보기에서 사용할 수 없습니다.","hierarchy_hint":"필터링된 테이블의 모든 결과는 해당 상위 항목과 함께 확대됩니다. 계층 구조를 확장하거나 축소 할 수 있습니다.","hierarchy_mode":"계층 구조","highlighting":"강조 표시","highlighting_mode":{"description":"색상으로 강조 표시","entire_row_by":"전체 행 기준","inline":"강조 표시된 특성","inline_all":"모든 특성","none":"강조 표시 없음","priority":"우선 순위","status":"상태","type":"타입"},"modal_title":"작업 패키지 테이블 구성","relation_filters":{"first_part":"모든 작업 패키지 표시","second_part":"현재 작업 패키지"},"show_timeline_hint":"테이블의 오른쪽에 대화형 Gantt 차트를 표시합니다. 테이블과 Gantt 차트 사이의 구분선을 드래그하여 너비를 변경할 수 있습니다.","sorting_mode":{"automatic":"자동","description":"작업 패키지를 정렬하기 위한 모드 선택:","manually":"수동","warning":"자동 정렬 모드를 활성화하면 이전 정렬이 손실됩니다."},"upsale":{"attribute_highlighting":"나머지 작업 중에 확연히 두드러지는 특정 작업 패키지가 필요합니까?","check_out_link":"Enterprise Edition을 체크아웃하세요.","relation_columns":"작업 패키지 목록에서 관계를 표시해야 합니까?"}},"tabs":{"activity":"활동","attachments":"첨부 파일","overview":"요약","relations":"관계","watchers":"주시자"},"time_relative":{"days":"일","months":"개월","weeks":"주"}},"zen_mode":{"button_activate":"Zen 모드 활성화","button_deactivate":"Zen 모드 비활성화"}},"number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":"","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":1,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"other":"바이트"},"eb":"EB","gb":"GB","kb":"kB","mb":"MB","pb":"PB","tb":"TB"}}},"nth":{"ordinalized":{},"ordinals":{}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"time":{"am":"오전","formats":{"default":"%m/%d/%Y %I:%M %p","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M","time":"%I:%M %p"},"pm":"오후"}});
